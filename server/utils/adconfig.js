const config = require('config');
var ActiveDirectory = require('activedirectory');
var adConfig = { url: config.get('ad_url'),
               baseDN: config.get('ad_baseDN'),
               username: config.get('ad_username'),
               password: config.get('ad_password') 
            }
var ad = new ActiveDirectory(adConfig);

module.exports = ad;