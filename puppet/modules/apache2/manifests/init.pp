class apache2 {
  package {
    "apache2":
      ensure => present,
      before => File["/etc/apache2/apache2.conf"]
  }

  service {
    "apache2":
      ensure => true,
      enable => true,
      subscribe => File["/etc/apache2/apache2.conf"]
  }

  file {
    "/etc/apache2/apache2.conf":
      source => "puppet:///modules/apache2/apache2.conf",
      mode => 644,
      owner => "root",
      group => "root",
      require => [Package["apache2"], Package["phpmyadmin"]];
    "/etc/apache2/sites-enabled/000-default":
      source => "puppet:///modules/apache2/default",
      mode => 644,
      group => "root",
      owner => "root",
      notify => Service["apache2"],
      require => Package["apache2"];
  }

  exec { 
    "userdir": 
      notify => Service["apache2"],
      command => "/usr/sbin/a2enmod userdir",
      require => Package["apache2"],
  }
}
