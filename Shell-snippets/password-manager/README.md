## Search for password record
```bash
pattern=dinu
gpg -d secrets.gpg 2>/dev/null \
  | awk '{RS = '\n'; IGNORECASE=1} /'"${pattern}"'/ {print(""); print($0)}' \
  | grep -i -E ".*pin|pass.*|$"
```
