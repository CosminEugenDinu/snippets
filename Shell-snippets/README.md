# Tutorials
# Connect to server behind firewall (via third party server)
Servers:
- `target` - name of the server behind firewall
- `vps-on-line` - name of the server with static IP address (like a VPS from digital ocean)
- `laptop` - name of the working server
## Step 1
Both servers (`laptop` and `target`) must be able to connect `vps-on-line` via ssh.
- Somehow reach into `target`'s terminal:
- Temporary set `PasswordAuthentication yes` from `/etc/ssh/sshd_config` and `sudo service ssh restart`. This is required in order to copy your `laptop` ssh public key to `target` `~/.ssh/authorized_keys`.
- Start a ssh connection to `vps-on-line` with remote forwarding `-R` `remote_socket:host:hostport`
```bash
ssh -R 48001:localhost:22 vps_user@vps-on-line -o ServerAliveInterval=60
```
***Note 1:***
*In order to run above command and leave terminal you might want to run it in [screen](https://www.gnu.org/software/screen/manual/screen.html#Invoking-Screen) (terminal multiplexor), like `screen yourcommand` then `Ctrl+a`, then `Ctrl+d`, then `exit` or append *** &*** to command and `you are free`.*

***Note 2:***
*`-o ServerAliveInterval=60` instructs the ssh client to send a sign-of-life signal to the server once a minute, to prevent connection loss.*

## Step 2
Go to your `laptop`
- Open ssh connection to `vps-on-line` with local port forwarding:
```bash
screen ssh -L 48002:localhost:48001 vps_user@vps-on-line -o ServerAliveInterval=60
```
- Detach screen terminal: `Ctrl+a`, then `Ctrl+d`.
- Try connectiog to `target`:
```bash
ssh -p 48002 target_user@localhost
```
- If succeeded, copy your public key
```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub -p 48002 target_user@localhost
```
- Test ssh connection from `laptop` to `target`
```bash
ssh -p 48002 target@localhost
```
- On `target` server, don't forget to set `PasswordAuthentication no` from `/etc/ssh/sshd_config` and `sudo service ssh restart`.

## Use rsync over ssh tunnel
```bash
# remove -n (--dry-run) for file transfer
rsync -avP -n -e "ssh -p 48002" target_user@localhost:remotedir/ ./localdir/
```
