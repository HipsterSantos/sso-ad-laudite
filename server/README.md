# Active directory sso

This project uses the protocol ldap for AD authetication
```
Before running node server prior set-up the dotenv file 
the configuration file asks for some important information to make the ldap protocol communicate to azure active directory .


````

## Environment variable 

```
{
  "jwtPrivateKey": "privatekey_sso_ad",
  "PORT":"PORT",
  "ad_url":"ldap://dc.domain.com",
  "ad_baseDN": "dc=domain,dc=com",
  "ad_username": "username@domain.com",
  "ad_password": "password" 
}
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```

### Running server 
```
node index.js
```
