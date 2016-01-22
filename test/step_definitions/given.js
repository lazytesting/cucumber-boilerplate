/**
 * given steps
 */

module.exports = function () {
    this.Given(/I open the (url|site) "$string"$/,
            require('../support/action/openWebsite'));

    this.Given(/^the element "$string" is( not)* visible$/,
            require('../support/check/isVisible'));

    this.Given(/^the element "$string" is( not)* enabled$/,
            require('../support/check/isEnabled'));

    this.Given(/^the element "$string" is( not)* selected$/,
            require('../support/check/checkSelected'));

    this.Given(/^the checkbox "$string" is( not)* checked$/,
            require('../support/check/checkSelected'));

    this.Given(/^there is (an|no) element "$string" on the page$/,
            require('../support/check/checkElementExists'));

    this.Given(/^the title is( not)* "$string"$/,
            require('../support/check/checkTitle'));

    this.Given(/^the element "$string" contains( not)* the same text as element "$string"$/,
            require('../support/check/compareText'));

    this.Given(/^the (element|inputfield) "$string" does( not)* contain the text "$string"$/,
            require('../support/check/checkContent'));

    this.Given(/^the (element|inputfield) "$string" does( not)* contain any text$/,
            require('../support/check/checkContent'));

    this.Given(/^the page url is( not)* "$string"$/,
            require('../support/check/checkURL'));

    this.Given(/^the( css)* attribute "$string" from element "$string" is( not)* "$string"$/,
            require('../support/check/checkProperty'));

    this.Given(/^the cookie "$string" contains( not)* the value "$string"$/,
            require('../support/check/checkCookieContent'));

    this.Given(/^the cookie "$string" does( not)* exist$/,
            require('../support/check/checkCookieExists'));

    this.Given(/^the element "$string" is( not)* ([\d]+)px (broad|tall)$/,
            require('../support/check/checkDimension'));

    this.Given(/^the element "$string" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
            require('../support/check/checkOffset'));

    this.Given(/^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
            require('../support/action/resizeScreenSize'));

    this.Given(/^I have closed all but the first (window|tab)$/,
            require('../support/action/closeAllButFirstTab'));

    this.Given(/^a (alertbox|confirmbox|prompt) is( not)* opened$/,
            require('../support/check/checkModal'));;
};
