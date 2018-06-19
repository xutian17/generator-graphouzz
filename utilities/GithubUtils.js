var shelljs = require('shelljs');

module.exports = {
    getUserInfo: function() {
        return {
            name: shelljs.exec('git config user.name', {silent: true}).output.replace(/\n/g, ''),
            email: shelljs.exec('git config user.email', {silent: true}).output.replace(/\n/g, ''),
            github: shelljs.exec('git config github.user', {silent: true}).output.replace(/\n/g, '')
        };
    }
};
