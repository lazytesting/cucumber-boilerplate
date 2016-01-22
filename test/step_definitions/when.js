/**
 * when steps
 */

module.exports = function () {
    this.When(/^I (click|doubleclick) on the (link|button|element) "$string"$/,
            require('../support/action/clickElement'));

    this.When(/^I (add|set) "$string" to the inputfield "$string"$/,
            require('../support/action/setInputField'));

    this.When(/^I clear the inputfield "$string"$/,
            require('../support/action/clearInputField'));

    this.When(/^I drag element "$string" to element "$string"$/,
            require('../support/action/dragElement'));

    this.When(/^I submit the form "$string"$/,
            require('../support/action/submitForm'));

    this.When(/^I pause for (\d+)ms$/,
            require('../support/action/pause'));

    this.When(/^I set a cookie "$string" with the content "$string"$/,
            require('../support/action/setCookie'));

    this.When(/^I delete the cookie "$string"$/,
            require('../support/action/readCookie'));

    this.When(/^I press "$string"$/,
            require('../support/action/pressButton'));

    this.When(/^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
            require('../support/action/handleModal'));

    this.When(/^I enter "$string" into the prompt$/,
            require('../support/action/setPromptText'));

    this.When(/^I scroll to element "$string"$/,
            require('../support/action/scroll'));

    this.When(/^I close the last opened (window|tab)$/,
            require('../support/action/closeLastOpenedWindow'));

    this.When(/^I focus the last opened (window|tab)$/,
            require('../support/action/focusLastOpenedWindow'));

    this.When(/^I log in to site with username "$string" and password "$string"$/,
            require('../support/custom/login'));

    this.When(/^I select the (\d+)(st|nd|rd|th) option for element "$string"$/,
            require('../support/action/selectOptionByIndex'));

    this.When(/^I select the option with the (name|value|text) "$string" for element "$string"$/,
            require('../support/action/selectOption'));;
};
