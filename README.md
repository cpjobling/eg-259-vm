# A Virtual Machine for the EG-259 Module

## What's this for?

EG-259 Web Applications Technology is a 10 week lecture course which
introduces students to web applications development. To succeed in the
course students will need to get to grips with the LAMP stack preferably
on a web server that matches what they will see in industry. Even though
packaged versions of Apache, PHP and MySQL are available for Windows and
Mac platforms, they are arranged differently on each machine and it's
difficult to be sure that all students have the same set ups as their
teacher. 

The ideal would be to give each student access to a personal Linux web
server. However there are cost issues with this approach. Last year, I
encouraged students to install VitualBox and install an Ubuntu Server as
a virtual machine. With Vagrant, now available packaged as install
images for Windows and Mac, this process becomes even easier. This
project provides a pre-boxed Linux server image that can be installed
and provisioned in around 25-30 minutes (about the length of a lecture).
At the same time it will introduce students to Git and GitHub which are
central to the professional web development community.

## What's included?

The EG-259 VM has the following features:

- Ubuntu 12.04.1 LTS (Precise Pangolin) server (32 bit) with RVM and Ruby 1.9.3 packaged as a Vagrant base box
- A Puppet provisioning script which automatically installs a LAMP stack consisting of the Apache 2 Web server, PHP Version 5 and MySQL
- phpMyAdmin is included for web-based administration of the MySQL database

## Getting Started

Before you can make use of this you will need to install the following development tools:

- [Git for your platform](https://help.github.com/articles/set-up-git)
- [VirtualBox for your platform](https://www.virtualbox.org/wiki/Downloads)
- The latest version of [Vagrant for your platform](http://www.vagrantup.com/)

In most cases, this is simply a question of downloading the correct
installer package for your development machine and running the
installer.

You may wish to study these additional resources to find out why these
three tools have become key components of the modern web developer's
toolbox.

- [About Git](http://git-scm.com/documentation)
- [About VirtualBox](https://www.virtualbox.org/wiki/VirtualBox)
- [About Vagrant](http://docs.vagrantup.com/v1/docs/getting-started/index.html)



## Installing the EG-259 VM

Once you have Git, VirtualBox and Vagrant installed you'll be able to
*clone* this repository and run Vagrant to download a virtual machine
image specially configured for the EG-259 Web Applications Technology
module, start it up in VirtualBox and provision it as a LAMP (Linux
Apache PHP MySQL) server. Even better, you will have an identical copy
of the machine that Dr Jobling and your peers will be using on this
module and will not need to worry about any system specific
configurations. The EG-259 Virtual Machine will run as a guest operating
system that will be virtually indistinguishable from a native web server
but even better, the files that will become the web sites developed in
the course can be created and edited in a local folder on the host
operating system.

Furthermore, because you have Git installed, you can develop your web
site and web applications in the knowledge that your work can be version
controlled.

## Using the EG-259 VM

## Contributing

- [Follow this project](https://help.github.com/articles/be-social). 
- [Fork, clone, extend](https://help.github.com/articles/fork-a-repo). 
- Send me a pull request when you're done.

## References

1. Anthony Burns and Tom Copeland, *Deploying Rails*, Pragmatic
   Bookshelf, 2012.
2. Philip Sturgeon, [Vagrant: What, Why and
   How?](http://net.tutsplus.com/tutorials/php/vagrant-what-why-and-how/),
net.tustsplus.com, August 20, 2012. 
3. Philip Sturgeon, *PyroCMS Vagrant* (GitHib Repository
   <http://github.com/pyrocms/devops-puppet.git>), Accessed: January 19,
2013.
4. Henri Sipoen, [Puppet Module for LAMP
   Installation](http://awaseroot.wordpress.com/2012/04/30/puppet-module-for-lamp-installation/),
awaseroot.wordpress.com, April 30, 2012.


