/**
 * then steps
 */

module.exports = function (dict) {
    this
        .then(/^I expect that (element|inputfield) "$string"( not)* contains the text "$string"$/,
            require('../support/check/checkContent'));
};
