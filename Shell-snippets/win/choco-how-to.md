# Use [chocolatey](https://chocolatey.org/install) for easy programs installation
### Enable `sudo` equivalent in Windows aka `runas /user:administrator command`:
- open `cmd.exe` with elevated permissions (right-click -> `Run as administrator`) and enble `Administrator account`
```batch
net user Administrator /active:yes
```
- set password for `administrator` user:
```batch
netplwiz
```
### Install programs using chocolatey as administrator:
```batch
runas /user:administrator "choco install thunderbird -y"
```
