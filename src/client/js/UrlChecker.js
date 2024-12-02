
const validator = require('validator');
function checkForUrl(inputUrl) {

    return validator.isURL(inputUrl);
}

export { checkForUrl };
