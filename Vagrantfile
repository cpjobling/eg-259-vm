# -*- mode: ruby -*-
# vi: set ft=ruby :

# README FIRST
#
# If you have a copy of this file I assume that you have correctly
# set-up your virtual machine as per the instructions given at
# https://github.com/cpjobling/eg-259-vm.git.
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

  config.vm.customize ["modifyvm", :id, "--name", "eg259box", "--memory", "512"]
  config.vm.host_name = "eg259box"
  config.vm.forward_port 22, 2222, :auto => true
  config.vm.forward_port 80, 4567
  config.vm.network :hostonly, "33.33.13.37"
end
