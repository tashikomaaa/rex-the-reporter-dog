const inquirer = require('inquirer');
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
module.exports = {
  setup: () => {
    const questions = [
      {
        name: 'uri',
        type: 'input',
        message: 'Enter the url of your bones:',
        validate: function(value) {
          if (validURL(value)) {
            return true;
          } else {
            return 'Please enter the url of your bones.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};