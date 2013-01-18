class php {
  package {
    "php5":
      ensure => "present",
  }
  package {
    "php5-cli":
      ensure => "present",
  }
  package {
    "php5-mysql":
      ensure => "present",
  }
  package {
    "libapache2-mod-php5":
      ensure => "present",
  }
  file { "/etc/apache2/mods-available/php5.conf":
    notify => Service["apache2"],
    ensure => "present",
    source => "puppet:///modules/php/php5.conf",
    owner => "root",
    group => "root",
    mode => 644,
    require => [Package["apache2"], Package["php5"]],
  }
}
