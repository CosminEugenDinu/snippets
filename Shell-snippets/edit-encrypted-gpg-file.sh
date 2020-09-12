#!/usr/bin/env bash


# decrypt CRYPT_FILE, pipe to vim, and encrypt again when type ':q!'
edit_crypt_file() {
        # first argument is a file encrypted with gpg
        CRYPT_FILE=$1
	if [ -z $1 ];then
		printf 'First argument must be a encrypted.gpg file!\n'
		exit 2
	fi
        echo "Enter your gpg encrypted file passphrase,
edit it with vim, then close the editor with ':q!'."
        # get password user input
        local pass
        read -sp "Password:" pass

        gpg_flags='--batch --yes'
        vim_flags='- -n -u NONE --not-a-term'

        # vim command to run before exit with ':q!'
        vim_autocmd=":autocmd VimLeave * :%! tee | gpg $gpg_flags"
        vim_autocmd+=' --passphrase '
	# single quotes are necessary for passwords with special characters, like $
	# then append backslash in from of % signs in password to escape vim autocmd special chars
	vim_autocmd+="'${pass//\%/\\%}'"
        vim_autocmd+=" -o $CRYPT_FILE -c"
	
	echo ".........test............."

        gpg $gpg_flags --passphrase "$pass" -d $CRYPT_FILE | vim $vim_flags -c "$vim_autocmd"

        # restart agent in order to lose kept password
        gpgconf --kill gpg-agent
        unset pass
}

edit_crypt_file $1
