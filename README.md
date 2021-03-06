Cucumber Boilerplate [![Build Status](https://travis-ci.org/lazytesting/cucumber-boilerplate.svg?branch=master)](https://travis-ci.org/lazytesting/cucumber-boilerplate)
====================

## Warning

I'm using this project as quick start in my workshops. It allows you to get comfortable with gherkin and webdriver.
When you're looking for something you can use in production this boilerplate might not be the best choise. 

Boilerplate project to run WebdriverIO tests with Cucumber. It is based on a framework called
[yadda](https://github.com/acuminous/yadda) and brings **true** [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development)
to JavaScript and WebdriverIO. Instead of writing complicated test code that only devs can understand,
Cucumber maps an ordinary language to code and allows to start with the test process in the early stages
of your product development.

# Quick start

Choose one of the following options:

1. Download the latest stable release [here](https://github.com/lazytesting/cucumber-boilerplate/archive/master.zip) or
2. Clone the git repo — `git clone https://github.com/lazytesting/cucumber-boilerplate.git`

Then just embed the test directory into the root folder of your project and copy/install the [necessary dependencies
from the package.json](https://github.com/webdriverio/cucumber-boilerplate/blob/master/package.json#L26-L31)
file and you are all set.

## Features

- Super simple setup
- Full integration with [WebdriverIO](http://webdriver.io/)
- Over 150 predefined steps that cover almost everything you need, you can start writing tests right away
- Easy integration with cloud services like [Sauce Labs](https://saucelabs.com/)
- Support for different languages (French, Spanish, Norwegian, Polish, German, Russian)
- _Integration of WebdriverIO's Multiremote functionality (coming soon)_
- _Easy to run tests in parallel (coming soon)_

# How to write a test

Tests are written in [Gherkin syntax](http://docs.behat.org/en/latest/guides/1.gherkin.html#gherkin-syntax)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./test/features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

__myFirstTest.feature__
```gherkin
Feature:
    In order to keep my product stable
    As a developer or product manager
    I want to make sure that everything works as expected

Scenario: Check title of website after search
    Given I open the url "http://google.com"
    When I set "WebdriverIO" to the inputfield "#gbqfq"
    And I press "Enter"
    Then I expect that the title is "WebdriverIO - Google Search"

Scenario: Another test
    Given ...

```

This test opens the browser and navigates them to google.com to check if the title contains the search
query after doing a search. As you can see, it is pretty simple and understandable for everyone.

# How to run the test

[start the selenium & local webserver]


```sh
$ npm run-script start-selenium   # Run in it's own terminal window, and keep it running
$ npm run-script start-server     # Run in it's own terminal window, and keep it running
```

To run your tests just call the run.js file:

```sh
$ ./test/run.js
```

# Configurations

To configure your tests, checkout the [`config.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/test/config.js)
file in your test directory. It comes with a bunch of documented options you can choose from.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `config.js` to set all general configs (like mochaOpts) that don't change.
They act as default values. For each different environment you can create a new config with the following name
scheme:

```txt
config.<ENVIRONMENT>.js
```

Now you can create a specific config for your pre-deploy tests:

__config.staging.js__
```js
module.config = {
    baseUrl: 'http://staging.example.com'
}
```

Your environment-specific config file will get merged into the default config file and overwrites the values you set.
To run a test in a specific environment just set the desired `NODE_ENV` environment variable:

```sh
$ NODE_ENV=staging ./test/run.js
```

# Adding new steps and snippets

The predefined snippets allow you to do a lot of common things but you might need extra snippets which
are better aligned with your aims. To do so you will find all step definitions in `./test/steps`. They
are separated in `given`, `when` and `then`. For instance if you want to have a login step that helps
you to login the browser before each test, you can start to add that as a `given` snippet:

__./test/steps/given.js__
```js
module.exports = function() {

    this.given(/I open the (url|site) "$string"$/, function (type, page, done) {
        var url = type === 'url' ? page : this.baseUrl + page;
        this.browser.url(url , done);
    })

    // ... other predefined snippets
    // ...
    // ...

    /**
     * my login snippet
     */
    .given(/^I login as "$string" with password "$string"$/, function(username, password, done) {
        this.browser
            .setInput('input#username', username)
            .setInput('input#password', password)
            .submitForm('#login')
            .call(done);
    })
```

You define your snippet using regular expressions. This is pretty powerful as it allows you to create complex
sentences with multiple options. Everything that's within `"$string"` gets captured and appended to the
callback. The last argument is always a callback function that you need to call when your step is done.
You can access the browser and your WebdriverIO instance with `this.browser`.

To assert values this boilerplate project comes with a [Chai](http://chaijs.com/) integration. Let's say
you want to check if the username gets display in the header properly. For that we add a new snippet in

__./test/steps/then.js__
```js
module.exports = function(dict) {

    this.then(/^I expect that the title is( not)* "$string"$/,
            require('../support/helper/checkTitle'))

    // ... other predefined snippets
    // ...
    // ...

    /**
     * my check username in header snippet
     */
    .then(/^the username "$string" should be present in the header$/, function(username, done) {
        client.getText('#header .username', function(err, headerUsername) {
            should.not.exist(err);
            username.should.equal(headerUsername, 'username in header doesn\'t match');
        })
        .call(done);
    })
```

That's it. We created two new snippets to test something on our page. We can use these snippets now
in our Scenario like this:

```gherkin
Feature: ...

Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```

# Comments

You can add additional descriptive comments in your feature files.

```gherkin
###
  This is a
  block comment
###
Feature: As a bystander
    I can watch bottles falling from a wall
    So that I can be mildly amused

# This is a single line comment
Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```

# Pending test

If you have failing or unimplemented tests you can mark them as "Pending" so they will get skipped.

```gherkin
// skip whole feature file
@Pending
Feature: ...

// only skip a single scenario
@Pending
Scenario: ...
```

# Isolate test

If you want to run just a single test and ignore the others you can use the `@Only` annotation.

```gherkin
// run test is isolation
@Only
Scenario: ...
```

If there are more tests to isolate use the `@Isolate` annotation.

```gherkin
// run only the "isolated" scenarios
@Isolate
Scenario: ...

Scenario: ...
...

@Isolate
Scenario: ...
```

