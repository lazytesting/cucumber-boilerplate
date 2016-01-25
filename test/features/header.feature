Feature: Header
    As a User in Production
    I want to make sure I'm on the right page.

    Scenario: open URL
        Given I open the url "http://localhost:8080/"
         Then I expect that element "h1" contains the text "DEMO APP"
