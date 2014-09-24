# Intro

A javascript playground using vagrant, nodejs, grunt and bower.

This first version uses a simple 32bit ubuntu box with a minimal installation of nodejs, grunt and karma. I tried puphpet but installed a brazillion things we don't need and generates a huge vagrant file which is hard to maintain if you are new to vagrant.

# Installation
#### vagrant & virtualbox
Prerequisite:
> vagrant: https://www.vagrantup.com/downloads.html  
> virtualbox: https://www.virtualbox.org/wiki/Downloads

vagrant up => start box  
vagrant ssh => log into box

#### grunt
grunt watch => watch for file changes and do sass/minification/obfuscation/... on change

#### server
npm start

#### testing
> Does not work in vagrant currently, as it tries to start a chrome browser
npm test-single-run => unit tests (run once and exist)
grunt protractor => run end to end tests

# Issues
##### testing on vagrant
technically we can run the tests in a headless chrome instance, but this is only usefull for continious integration testing, as you want to see your browser display the results. Currently the best way to run the tests is just to run them on your own machine, instead of withing the vagrant environment.
##### slow
ubuntu 12.04 32bit is painfully slow when emulated with virtualbox
##### git & telenet
git:// protocol is blocked on telenet network, so you need to instruct git to switch to https:// if you try to use bower on your local machine. The vagrant box is configured always to use https://

# TODO
##### config for parrallels / vmware
virtualbox is slow, would be nice if we could use a faster emulator if present on system
