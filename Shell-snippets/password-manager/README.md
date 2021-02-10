## Search for password record
```bash
gpg -d secrets.gpg 2>/dev/null \
  | awk 'RS = '\n'; tolower($0) ~ /team/ {print(""); print $0}' \
  | grep -i "pass"
```
