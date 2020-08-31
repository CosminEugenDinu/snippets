#!/usr/bin/env bash


# decrypt CRYPT_FILE, pipe to vim, and encrypt againg whent type ':q!'
edit_crypt_file() {
        echo "Enter your gpg encrypted file passphrase,
edit it with vim, then close the editor with ':q!'."

        # first argument is a file encrypted with gpg
        CRYPT_FILE=$1
        # get password user input
        local pass
        read -sp "Password:" pass

        gpg_flags='--batch --yes'
        vim_flags='- -n -u NONE --not-a-term'

        # vim command to run before exit with ':q!'
        vim_autocmd=":autocmd VimLeave * :%! tee | gpg $gpg_flags --passphrase $pass -o $CRYPT_FILE -c"

        gpg $gpg_flags --passphrase $pass -d $CRYPT_FILE | vim $vim_flags -c "$vim_autocmd"

        # restart agent in order to lose kept password
        gpgconf --kill gpg-agent
        unset pass
}

edit_crypt_file $1
