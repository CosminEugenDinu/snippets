#!/usr/bin/env bash

ch_pass() {
    # first argument is a file encrypted with gpg
    CRYPT_FILE=$1
    if [ -z $1 ];then
            printf 'First argument must be a encrypted.gpg file!\n'
            exit 2
    fi

    # get password user input
    local pass
    read -sp "Password:" pass

    gpg_flags='--batch --yes --passphrase'

    decrypted=$(gpg $gpg_flags "$pass" -d $CRYPT_FILE)
    # $? Expands to the exit status of the most recently executed foreground pipeline.
    # if previous command succeded
    if [ $? = 0 ];then
        read -p "Change password ? (y/n):" confirm
        if [ "$confirm" == "y" ];then
            read -sp "New password:" new_pass
            read -sp "New password again:" new_pass2
            [ "$new_pass" != "$new_pass2" ] && echo "Wrong new password!" && exit 1
            printf "\nSave as new file? (y/n):"
            read new_file_y_n
            new_filename="$1" # same file
            [ "$new_file_y_n" == "y" ] && new_filename="new_$1"
            # it seems '\n' at end of file is required
            printf "$decrypted\n" | gpg $gpg_flags "$new_pass" -o $new_filename -c 
            echo "File $new_filename saved!"
        else
            exit 1
        fi
    else
        printf "Probably wrong password...\n"
        exit 1
    fi

    # restart agent in order to lose kept password
    gpgconf --kill gpg-agent
    unset pass
}


ch_pass $1


