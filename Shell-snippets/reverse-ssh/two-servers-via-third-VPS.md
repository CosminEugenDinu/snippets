https://superuser.com/questions/31552t3/ssh-connection-between-two-behind-nat-computers-through-third-public-ip-computer

......................................................................

on Home server (tunnel from third party to home):
ssh -R 20000:127.0.0.1:22 thirdparty.org

This connects your home box to the third party shell, and then starts to forward any connections to port 20000 on the third party shell to port 22 on your home box (the SSH port).

On remote computer (tunnel from remote to third party):
ssh -L 20000:127.0.0.1:20000 thirdparty.org

This connections your remote box to the third party shell, and then starts to foward port 20000 on the remote box to port 20000 on the third party shell.

and then on remote computer (connect over tunnels):
ssh 127.0.0.1:20000 and enter in credentials for your home server

This will attempt to ssh to port 20000 on the remote box. Since we set up a tunnel to the third party, the #2 command effectively forwards this connection attempt to 127.0.0.1:20000 on the third party shell. Then, the first command fowards the connection again to port 22 on your home box, at which point the ssh server picks up the connection.

....................................................................................

I have tried to better explain the accepted solution below. Let us assume "machine A" and "machine B" are both behind NAT firewall. While both have ssh access to a remote "machine R" (say a VPS).

R -> A

ssh -R 20000:127.0.0.1:22 user@RemoteHost
Above command executed on machine A.

Create a tunnel from R (port 20000 of R) to A (port 22 of A) (reverse tunneling)

B -> R

ssh -L 8000:127.0.0.1:20000 user@RemoteHost
Above command executed on B.

Creates a tunnel from B (port 8000 of B) to R (port 20000 of R)

B -> A

ssh 127.0.0.1 -p 8000
actual connection is going though R , that is B (port 8000) -> R (port 20000) -> A(port 22)

Same using PuTTY and windows:

R -> A

putty.exe -R 20000:127.0.0.1:22 -ssh RemoteHost -P port -l user -pw password
B -> R

putty.exe -L 8000:127.0.0.1:20000  -ssh RemoteHost -P port -l user -pw password
B -> A

putty.exe -ssh 127.0.0.1 -P 8000 -l user -pw password