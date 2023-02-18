Although we can install several other operating systems in the server like python, node etc. but our main objective is to host our static website on it.
So, we will be installing Apache2 web server in our server.

UFW is a firewall whose status is inactive now. It means that anyone can configure with our system’s requirements and hence, we need to activate it.
ufw status

Along with it, we need to install a tried and trusted software. We need to run the command called **apt update ** and we will get the output as follows-

Some more apt commands are as follows-
`apt install apache2`
`apt install mysql-server`
`apt install php`
`apt install python`
`apt install nodejs`
ETC

We will now install the software called lamp stack. A LAMP Stack is a set of open-source software that can be used to create websites and web applications. LAMP is an acronym, and these stacks typically consist of the Linux operating system, the Apache HTTP Server, the MySQL relational database management system, and the PHP programming language.

We now need to write `apt install apache2`. 
Also it is recommended to setup a server by making a new user. We can do this by writing the command- adduser user and giving admin privileges and they just have to use 'sudo' before the command.

Commands in tutorial are as follows-
`ufw status`
`cd /var/www/`
`ls ---> cd html`
`ls ---> index.html`
`vim index.html` (Used to edit the file in the terminal for ubuntu)
{VIM COMMANDS} -->
i ---> insert
esc ---> exit
:wq ---> save and exit




















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
ETC
