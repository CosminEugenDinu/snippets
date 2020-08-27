
# Connect to your Android Phone with SSH via 3rd server

We have 3 computers: Phone, Remote.VPS and Laptop.
We want to establish a connection between Phone and Laptop via Remote.VPS.
Let's assume "Phone" and "Laptop" are both behind NAT firewall. While both have ssh access to a "Remote.VPS".

**1. Phone settings:**
* [Install TERMUX on phone - Android terminal emulator and Linux environment app](https://termux.com/)
* install openssh, generate key and establish ssh connection
  
    ```bash
    apt update && apt upgrade -y
    apt install -y openssh

    # create rsa key
    # will be saved at /data/data/com.termux/files/home/.ssh/id_rsa.pub
    ssh-keygen -t rsa -b 4096 -C $(whoami)@myphone

    # on 3rd (remote) server (VPS), in order to copy public key:
    # temporary set "PasswordAuthentication yes" from file
    # /etc/ssh/sshd_config
    # then run `sudo service ssh restart` 
    
    cd $HOME
    # copy public key to remote VPS
    # if it works, will prompt for vps_user password
    ssh-copy-id -i .ssh/id_rsa.pub vps_user@remote.vps
    # ssh to remotevps
    ssh vps_user@remote.vps
    # set "PasswordAuthentication no"
    sudo vim /etc/ssh/sshd_config
    sudo service ssh restart
    # logout from remote.vps and turn back to your android terminal
    exit
    ```

* set password for current user and configure ssh server:
  
    ```bash 
    # view user name, like u0_a253
    whoami
    # set password
    passwd
    # start OpenSSH server
    sshd
    # the ssh server on termux is not listening on port 22, but port 8022
    # to check settings run:
    cat $PREFIX/etc/ssh/sshd_config
    # check connection on localhost
    ssh -p 8022 localhost
    ```

* try reverse ssh connection to remote.vps
  ```bash
  # port 43022 seems to be unallocated
  # https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
  # -R 43022:localhost:8022  that means the ssh server of the phone will be available on port 43022 of your server, like `ssh -p 43022 phone_user@localhost` (ran on remote.vps) after established reverse SSH connection from phone

  # connect remote.vps via remote SSH port forwarding
  ssh -R 43022:localhost:8022 vps_user@remote.vps
  ```


**2. Laptop settings:**
* connect to remote.vps with local port forwarding:
  ```bash
  ssh -L 8000:localhost:43022 vps_user@remote.vps
  ```
* open another terminal and connect to your Phone:
  ```bash
  # you will be prompted for phone_user password
  ssh -p 8000 localhost
  # if OK, exit

  # now copy some nasty file from Laptop to Phone
  # you may want to first setup storage on Termux
  # https://wiki.termux.com/wiki/Termux-setup-storage
  scp -P 8000 nasty_file phone_user@localhost:storage/downloads

  ```