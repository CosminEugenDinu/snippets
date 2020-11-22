### Copy selected lines to clipboard (WSL2):
- Select lines to copy:
`Shift + v` + `J` or `K`
- Enter command mode: `:`. Will show: `:'<,'>`
- Don't delete `:'<,'>` part and enter `w ! clip.exe`. The whole command will be: `:'<,'>w ! clip.exe`.
- Now you can paste from clipboard, like `Ctrl + p`.
