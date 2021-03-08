const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'name of the bones',
        type: 'input',
        message: 'Enter the name of your bones:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the name of your bones for Rex.';
          }
        }
      },
      {
        name: 'uri',
        type: 'input',
        message: 'Enter the uri of your bones:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the uri of your bones.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};