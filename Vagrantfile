# -*- mode: ruby -*-
# vi: set ft=ruby :

# README FIRST
#
# If you have a copy of this file I assume that you have correctly
# set-up your virtual machine as per the instructions given at
#
#
# If not, I suggest you go there first.
#
# This set-up should just work to load a version of 
# Ubuntu Server 12.04 LTS [Precise Pangolin]
# and provision it with Apache, MySQL and PHP.
#
# to use, issue the following commands from a command line:
#   vagrant up
#   vagrant ssh
# to shut-down again, issue:
#   vagrant halt
#
Vagrant::Config.run do |config|
  config.vm.box = "precise32_for_eg259"
  config.vm.box_url = "https://dl.dropbox.com/u/172477/eg-259/vbox/precise32_for_eg259.box"

  # If you have installed the vagrant-vbguest plugin, you can un-comment
  # the following line to have virtualbox guest additions automatically
  # updated when you upgrade virtual box on your host machine.
  # config.vbguest.auto_update = true

  # do NOT download the virtual guest additions so file from a webserver
  # config.vbguest.no_remote = true
end
