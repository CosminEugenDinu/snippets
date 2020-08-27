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
