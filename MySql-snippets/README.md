## Install MySql 8.x on WSL2 Ubuntu18.04

```bash
(
git clone https://gist.github.com/CosminEugenDinu/7ef73816f950b1ba8a9fd1eabb23c42e install_mysql8
chmod 740 install_mysql8/wsl2-ubuntu18.04-mysql8.0.sh
./install_mysql8/wsl2-ubuntu18.04-mysql8.0.sh
)
```

Enter MySql console in order to setup database, users, etc.:
```bash
sudo mysql
# or $sudo mysql -u root -p (if you set up root password)

```
```
mysql> create database db_name;
mysql> create user db_user@localhost identified by 'db_user_pass';
mysql> grant all on db_name.* to db_user@localhost;
mysql> exit
```

Import backup database data
```bash
sudo mysql db_name < /full/path/to/backup.sql
```
Now start mysql service (WSL2 - Ubuntu18):
```bash
sudo service mysql start
```
If encountered an error like this: *Starting MySQL.2020-11-13T12:32:57.347234Z mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists.
 The server quit without updating PID file (/var/run/mysqld/mysqld.pid).*
Fix it like this:
```bash
(
# got error after reinstalling: mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists
# so check if exists and if not make it
if [ ! -d "/var/run/mysqld" ]; then
  sudo mkdir -p /var/run/mysqld
  sudo chown mysql:mysql /var/run/mysqld
 fi

# start mysql server
sudo service mysql start
)
```
