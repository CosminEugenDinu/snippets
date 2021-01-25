# How to use `find` and rename files

```bash

# find names with spaces, except those begining with '_'
# and store them in a variable
found=$( find * -type f -regex '.*/[^_][^/]*\.html' )

# convert variable to array (but first set IFS=$'\n')
old_IFS=$IFS
IFS=$'\n'
list=( $found )
IFS=$old_IFS

# check 
for name in "${list[@]}";do
  printf "$name --ok--\n";
done

```
