Vagrant::Config.run do |config|
  config.vm.box = "precise32"
  
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.forward_port 8000, 8888

  config.vm.provision :shell, :inline => "apt-get -y install curl"
  config.vm.provision :shell, :inline => "curl -sL https://deb.nodesource.com/setup | sudo bash -"
  config.vm.provision :shell, :inline => "apt-get -y install nodejs=0.10.*"
  config.vm.provision :shell, :inline => "apt-get -y install git"
  config.vm.provision :shell, :inline => "git config --global url.'https://'.insteadOf git://"
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
  
end
