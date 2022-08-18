## Use gpg2pdf
- Prerequisites: ghostscript, enscript, qpdf

### Install ghostscript, enscript
```bash
sudo apt update
sudo apt install ghostscript enscript qpdf
```

### Install ghostscript (from src)
```bash
# C compilers
sudo apt-get install build-essential

# download ghostscript source code
# https://ghostscript.com/releases/gsdnld.html
wget https://github.com/ArtifexSoftware/ghostpdl-downloads/releases/download/gs9561/ghostscript-9.56.1.tar.gz
cd ghostscript-9.56.1

sudo ./configure

sudo make install
```

### Converts gpg symmetric encripted file to pdf (via ghostscript).
Requires password: will become pdf encryption key - open.
Requires permissions password.
- Usage:
```bash
./gpg2pdf file.gpg
```

## Search for password record
```bash
pattern=dinu;
gpg -d secrets.gpg 2>/dev/null \
  | awk '{RS = '\n'; IGNORECASE=1} /'"${pattern}"'/ {print(""); print($0)}' \
  | grep -i -E ".*pin|pass.*|$"
```
