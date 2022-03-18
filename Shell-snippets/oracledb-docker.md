# Install and run Oracle Database Express from Docker container

```bash
mkdir -p ~/oracle/data
chmod a+xrw ~/oracle/data
```

https://github.com/oracle/docker-images/blob/main/OracleDatabase/SingleInstance/README.md#:~:text=To%20run%20your%20Oracle%20Database%20Express%20Edition%20container%20image%20use,%5C%20oracle%2Fdatabase%3A11.2.

```bash
./buildContainerImage.sh -x -v 21.3.0 -o '--build-arg SLIMMING=false'
docker run --name oracle -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=<your password> -v ~/oracle/data:/opt/oracle/oradata oracle/database:21.3.0-xe
```
Connect and create user:
```bash
docker exec -it oracle /bin/bash
```
```bash
sqlplus / as sysdba
```
```
#sqlplus shell
select name from v$services;
# shoul see name linke xepdb1
conn system/<your db pass from ORACLE_PWD>@localhost:1521/xepdb1;
# create user
create user <your user name> identified by <your user pass>;
# grant permissions
grant connect, resource, dba to <your user name>;
