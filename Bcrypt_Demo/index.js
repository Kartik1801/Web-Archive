const bcrypt = require('bcrypt');

/* 
const hashpassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt)
    console.log(salt);
    console.log(hash);
}
hashpassword("password"); */
const hashpassword = async (password) => {
    const hash = await bcrypt.hash(password, 12)
    console.log(hash);
}
hashpassword("password");
if (bcrypt.compare("password","$2b$12$sroQIjSaVjT7.F/gaG.QFOUVbla1HkljZBihzGx5NnWxg.xLIKpJW")){
    console.log("MATCH");
}
else console.log("WRONG")