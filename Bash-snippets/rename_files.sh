#!/usr/bin/env bash


CURRENT_FILE_PATH=$0
CURRENT_DIRECTORY=${CURRENT_FILE_PATH%/*}

# create dummy test files in dummy dir if dir does not exitst
[[ -f $CURRENT_DIRECTORY ]] || mkdir "$CURRENT_DIRECTORY/dummy"

# create files with spaces
for n in {1..12}; do
    touch "$CURRENT_DIRECTORY/dummy/$n file$n"
done

# rename files
for file_path in $CURRENT_DIRECTORY/dummy/*; do

    filename=${file_path##*/}

    without_spaces=${filename// /}

    # if has only one digit in front
    if [[ $without_spaces =~ ^[0-9][a-zA-Z]+ ]]; then
        add_0="0$without_spaces"
        mv "$file_path" "$CURRENT_DIRECTORY/dummy/$add_0"
    else
        mv "$file_path" "$CURRENT_DIRECTORY/dummy/$without_spaces"
    fi

    # echo $added_0_before_digit

done