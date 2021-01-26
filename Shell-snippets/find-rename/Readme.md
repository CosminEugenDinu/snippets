# How to use `find` and rename files

```bash

# find names with spaces, except those begining with '_'
# and store them in a variable
# !ATENTION! find does not return an array but a single variable
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

# to rename with mv use -iv or -vn to avoid data loss

# rename by adding _ in front of name
for name in "${list[@]}";do
  ren=$(echo "$name" | sed -r "s/(.*\/)(.*)/\1_\2/" -);
  mv -vi "$name" "$ren";
done 
```
