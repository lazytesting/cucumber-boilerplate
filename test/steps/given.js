/**
 * given steps
 */

module.exports = function () {
    this
        .given(/I open the (url|site) "$string"$/,
            require('../support/action/openWebsite'));
};
