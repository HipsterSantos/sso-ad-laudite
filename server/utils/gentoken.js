const config = require('config');
const jwt = require('jsonwebtoken');
module.exports = {
    generateToken:(id,isAdmin)=>{
        token = jwt.sign({id,isAdmin },config.get('jwtPrivateKey'));
        return token;
    }
}
cons