Vagrant::Config.run do |config|
  config.vm.box = "precise32"
  
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.forward_port 8000, 8888

  config.vm.provision :shell, :inline => "sudo apt-get -y install curl"
  config.vm.provision :shell, :inline => "curl -sL https://deb.nodesource.com/setup | sudo bash -"
  config.vm.provision :shell, :inline => "sudo apt-get -y install nodejs=0.10.*"
  config.vm.provision :shell, :inline => "sudo apt-get -y install git"
  config.vm.provision :shell, :inline => "npm install -g grunt"
  config.vm.provision :shell, :inline => "npm install -g karma"
  config.vm.provision :shell, :inline => "npm install -g grunt-cli"
  config.vm.provision :shell, :inline => "npm install -g karma-cli"
  config.vm.provision :shell, :inline => "npm install -g grunt-contrib-watch"
  config.vm.provision :shell, :inline => "npm install -g grunt-protractor-runner"
  config.vm.provision :shell, :inline => "npm install -g grunt-contrib-jshint"
  config.vm.provision :shell, :inline => "npm install -g grunt-jsdoc"
  config.vm.provision :shell, :inline => "npm install -g karma-chrome-launcher"
  config.vm.provision :shell, :inline => "npm install -g karma-firefox-launcher"
  config.vm.provision :shell, :inline => "npm install -g karma-jasmine"
  config.vm.provision :shell, :inline => "apt-get install libxss1 libappindicator1 libindicator7"
  config.vm.provision :shell, :inline => "wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb"
  config.vm.provision :shell, :inline => "dpkg -i google-chrome*.deb"

end