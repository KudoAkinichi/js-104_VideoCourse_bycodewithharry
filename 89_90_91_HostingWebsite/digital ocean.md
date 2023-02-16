https://www.codewithharry.com/videos/web-development-in-hindi-90/


Hosting Tutorial: Creating Our First VPS | Web Development Tutorials #90
Hosting Tutorial- Creating Our First VPS
In the last tutorial, we have discussed server hosting. Moving further, here, we will see how to configure and create our first hosting server. Most of the people think that shared hosting is suitable for web development websites. But it is recommended that shared hosting should not be used by web developers because you do not want that your website is sharing its place with other websites.

Although shared hosting is not bad for beginners. But when you host your website in shared hosting servers, there are chances that it may run slow.

A shared web hosting service is a web hosting service where many websites reside on one web server connected to the Internet. This is generally the most economical option for hosting, as the overall cost of server maintenance is spread over many customers.

In shared hosting the user is provided with a certain amount of RAM in CPU and bandwidth to host their websites along with different other websites. Shared hosting should only be selected if you are a beginner and there are only a few audiences on your website. In such a case, we do not want to set VPS servers


Now we will look upon the Digital Ocean console. When we open their website, the interface looks as follows-




We will now see how to make a droplet in DigitalOcean. Droplet can simply be referred to as servers. To make a droplet you need to select which type of server you want according to the number of days as shown here-






Then we need to select the location of our server where we want our files to be hosted. However we can select any location of our preference but it is recommended to select that location where our audience is. For example, if we have our audience in London, then the location should be selected as London.


We then need to configure our email and password from the console provided by Digital Ocean. However by default the username is root. Once we have configured it, we can write the Linux commands on it as shown here-


!! You will get your password in your email. !!
and username is root!


Hosting Tutorial- Installing Putty + Basic Linux Commands - Web Development Tutorials #91 | Coding with Harry
First put the IP address of your server in the address bar of your browser and press enter. You will get a page like this- which is a black console
SSH is a secure protocol for remote login. 

To connect with powershell type ssh root@ipaddress
and then yes fingerprint and put password.

In putty you can change font and many things.

These are some of the linux commands which are used in the console-
ls - list all the files in the directory
cd - change directory (You can also write cd var/temp/ to go to the temp directory inside var directory)
cd ../ - go to the previous directory
mkdir - make directory
rm - remove file
rmdir - remove directory
pwd - present working directory
nano - open a file
touch - create a file
mv - move a file
cp - copy a file
cat - read a file
chmod - change permission of a file
chown - change owner of a file
chgrp - change group of a file
df - disk free
du - disk usage
free - free memory
top - top processes
ps - processes
kill - kill a process
apt-get - install a package
apt-get update - update the package list
apt-get upgrade - upgrade the packages
apt-get dist-upgrade - upgrade the system
!!!!Here’s the general syntax:

     sudo (command)

      You can also add an option, such as:

      -k or –reset-timestamp invalidates the timestamp file.
      -g or –group=group runs commands as a specified group name or ID.
!!!!  -h or –host=host runs commands on the host.
































Commands to be written in the console are as follows-

apt-get update
apt-get install apache2
apt-get install php
apt-get install mysql-server
apt-get install php-mysql
apt-get install phpmyadmin
apt-get install php-curl
apt-get install php-gd
apt-get install php-mbstring
apt-get install php-xml
apt-get install php-xmlrpc
apt-get install php-soap
apt-get install libapache2-mod-php
apt-get install php-zip
apt-get install php-intl
apt-get install php-imagick
apt-get install php-ldap
apt-get install php-redis
apt-get install php-memcached
apt-get install php-ssh2
apt-get install php-xdebug
apt-get install php-igbinary
apt-get install php-msgpack
apt-get install php-libsodium
apt-get install php-geoip
apt-get install php-uuid
apt-get install php-raphf
apt-get install php-propro
apt-get install php-apcu
apt-get install php-igbinary
apt-get install php-redis
apt-get install php-memcached
apt-get install php-ssh2
apt-get install php-xdebug
apt-get install php-igbinary
apt-get install php-msgpack
apt-get install php-libsodium
apt-get install php-geoip
apt-get install php-uuid
apt-get install php-raphf
apt-get install php-propro
apt-get install php-apcu
apt-get install php-igbinary
apt-get install php-redis






