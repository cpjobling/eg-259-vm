# A Virtual Machine for the EG-259 Module

## What's this for?

## What's included?

The EG-259 VM has the following features:

- Ubuntu 12.04.1 LTS (Precise Pangolin) server (32 bit) with RVM and Ruby 1.9.3 packaged as a Vagrant base box
- A Puppet provisioning script which automatically installs a LAMP stack consisting of the Apache 2 Web server, PHP Version 5, MySQL
- phpMyAdmin is included for web-based administration of the MySQL database

## Getting Started

Before you can make use of this you will need to install the following development tools:

- Git for your platform
- VirtualBox for your platform
- Vagrant for your platform

In most cases, this is simply a question of downloading the correct installer package for your development machine and running the installer.

You may wish to study these additional resources to find out why these three tools have become key components of the modern web developer's toolbox.

- About Git
- About VirtualBox
- About Vagrant



## Installing the EG-259 VM

Once you have Git, VirtualBox and Vagrant installed you'll be able to *clone* this repository and run Vagrant to download a virtual machine image specially
configured for the EG-259 Web Applications Technology module, start it up in VirtualBox and provision it as a LAMP (Linux Apache PHP MySQL) server. Even better,
you will have an identical copy of the machine that Dr Jobling and your peers will be using on this module and will not need to worry about any system specific configurations. The EG-259 Virtual Machine will run as a guest operating system that will be virtually indistinguishable from a native web server but even better,
the files that will become the web sites developed in the course can be created and edited in a local folder on the host operating system.

Furthermore, because you have Git installed, you can develop your web site and web applications in the knowledge that your work can be version controlled.

## Using the EG-259 VM

## Contributing

Fork, clone, develop send me a pull request.

