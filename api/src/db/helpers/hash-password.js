const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = "$2b$10$zrslDZUP.uHKYPwpmpJAI.";


const hashPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, SALT_WORK_FACTOR);

        return hash;
    } catch (error) {
        console.log(error);
    }

}

module.exports = hashPassword;