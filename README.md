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
- A fully configured custom-built starter web application built by [HTML5 Boilerplate](http://html5boilerplate.com/) and [Initializr](http://www.initializr.com/) from responsive [Twitter Bootstrap](http://twitter.github.com/bootstrap/).
- All the examples from the module will be made evailable via regular updates (use `git pull` periodically)

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
module. Here are the commands:

    git clone https://github.com/cpjobling/eg-259-vm
    cd eg-259-vm

After you've cloned the repository and `cd`'d into the folder, you should be able to start up the
virtual machine using Vagrant and provision it as a LAMP (Linux
Apache PHP MySQL) server. 

    vagrant up 

The first time you do this, there will be a delay of a few minutes
while an image file is downloaded from the Internet, copied into VirtualBox and started up. There will then be another short delay while the LAMP stack is downloaded and installed. After this initial set-up time, `vagrant up` loads the virtual machine up very 
quickly.

Even better, you will have an identical copy
of the machine that Dr Jobling and your peers will be using on this
module and will not need to worry about any system specific
configurations. The EG-259 Virtual Machine will run as a guest operating
system that will be virtually indistinguishable from a native web server
but even better, the files that will become the web sites developed in
the course can be created and edited in a local folder on the host
operating system.



## Using the EG-259 VM

The URL of your new web server is <http://localhost:4567> and the contents of the
`eg-259-vm\web` folder is mapped to Apacher's `DOCUMENT_ROOT` `/var/www` on the guest web server.

To login to the guest server simply type:

    vagrant ssh  

To shutdown the server, type:

    vagrant halt

To reload it after making changes to the `Vagrantfile`, type:

    vagrant reload

To destroy the virtual machine:

    vagrant destroy

Furthermore, because you have Git installed, you can develop your web
site and web applications in the knowledge that your work can be version
controlled.

## Building Web Apps with this Setup

The folder `web` is mapped onto the guest operating systems document root at startup. In other words, `web` becomes http://localhost:4567/ and the index.html file in that folder will be displayed. 

The file [web/index.html](https://github.com/cpjobling/eg-259-vm/blob/master/web/index.html) 
is a [HTML5 Boilerplate](http://html5boilerplate.com/) template file and can be used as the starting point for developing your own web application. If you explore the contents of the `web` folder you will see that it contains additional assets including example favicons needed for web and mobile apps, an `.htaccess` file that optimizes the example app for running on Apache, a `404.html` page, `robots.txt`, `humans.txt` and the CSS, JavaScript and image assets needed to implement the Twitter Bootstrap template. To find out more about these assets and their purpose, read the documentation on the [HTML5 Boilerplate](http://html5boilerplate.com/) and [Twitter Bootstrap](http://twitter.github.com/bootstrap/) sites.

If you examine the code of HTML page `web/index.html` you will notice that it contains a lots of "boilerplate" code. This code is designed to ensure that your web app will run on most browsers, will be responsive, can be tracked with Google Analytics, loads the latest versions of [jQuery](http://jquery.com/) and [Modernizr](http://modernizr.com/), etc. The code is the result of man-years of hard-learned lessons that professional web developers have gained and generously contributed to the community. They are encoded into the HTML so you can take advantage of industry recognised best-practices from the off.

## Keeping Up to Date

To keep the software up to date, simply change directory to `eg-259-vm` and run `git pull`. If you have a github account you can watch the repository to be informed when updates happen.


## Tools and Technologies Used

1. [HTML5 Boilerplate](http://html5boilerplate.com/) -- "The world's most popular [web app] front-end template"
2. [Twitter Bootstrap](http://twitter.github.com/bootstrap/) -- "Sleek, intuitive, and powerful front-end framework for faster and easier web development."
3. [Initializr](http://www.initializr.com/) -- "Start an HTML5 project in 15 seconds!"
4. [jQuery](http://jquery.com/) -- "The write less, do more JavaScript library"
5. [Modernizr](http://modernizr.com/) -- "the feature detection library for HTML5 and CSS3"

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




