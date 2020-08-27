#! /usr/bin/env bash

OLDIFS="$IFS"
IFS=$'\n'

arg1=$1
arg2=$2
while inotifywait -r $arg1*; do
    # rsync -avz --delete -s $arg1 $arg2
    rsync -avz -s $arg1 $arg2
done

IFS="$OLDIFS" # restores default behaviour

# sync files with Javascript dir from Acrobat
# ./sync.sh ./JavaScripts/ "$ACROBAT_JS"

# export ACROBAT_JS='/mnt/c/Program Files (x86)/Adobe/Acrobat DC/Acrobat/Javascript'