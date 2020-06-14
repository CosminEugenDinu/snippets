#!/usr/bin/env bash

oldifs="$IFS"
IFS='\n'
CWD=$(pwd)

for file_path in $CWD/*; do

    filename=${file_path##*/}

    without_spaces=${filename// /}

    # if has only one digit in front
    if [[ $without_spaces =~ ^[0-9][a-zA-Z]+ ]]; then
        add_0="0$without_spaces"
        mv "$file_path" "$CWD/$add_0"
    else
        mv "$file_path" "$CWD/$without_spaces"
    fi

    # echo $added_0_before_digit

done

IFS="$oldifs"


