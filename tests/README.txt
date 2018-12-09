README
This project is written with Java, Cucumber, Maven, Selenium.

SCENARIO

This is project for test next scenarios:

  Scenario: positive Login
    Given User navigates to "https://cafetownsend-angular-rails.herokuapp.com"
    When User puts "Luke" to Login field
    Then Names puts "Skywalker" to Password field
    When User presses on Login Button
    Then List of users should be shown

  Scenario: positive Logout
    Given User navigates to "https://cafetownsend-angular-rails.herokuapp.com"
    When User puts "Luke" to Login field
    Then Names puts "Skywalker" to Password field
    When User presses on Login Button
    Then List of users should be shown
    Then User logs out
    Then Login and Password fields should be empty

  Scenario: login with wrong password
    Given User navigates to "https://cafetownsend-angular-rails.herokuapp.com"
    When User puts "Luke" to Login field
    Then Names puts "Sky" to Password field
    When User presses on Login Button
    Then Error message is shown "Invalid username or password!"

  Scenario: login with wrong login
    Given User navigates to "https://cafetownsend-angular-rails.herokuapp.com"
    When User puts "Lue" to Login field
    Then Names puts "Skywalker" to Password field
    When User presses on Login Button
    Then Error message is shown "Invalid username or password!"

  Scenario: create new user
    Given User navigates to "https://cafetownsend-angular-rails.herokuapp.com"
    When User puts "Luke" to Login field
    Then Names puts "Skywalker" to Password field
    When User presses on Login Button
    Then List of users should be shown
    Then User presses Create
    Then User adds "firstName" to First Name
    Then User adds "lastName" to Last Name
    Then User adds "2018-12-28" to Start Date
    Then User adds "fakemail@mail.com" to Email

DESCRIPTION

All scenarios are present in Positive.feature in folder src/test/resources.
All steps are defined in Annotantion.class.
Also Page Object model is used for working with elements on the page. WebElements are saved in mainPage.class.
Functions for more comfortable work with WebElements and actions are saved in Steps.java.
Helpful functions are saved in BaseTest.java
RunTest.java is glue for TestNG, Cucumber frameworks. Here is defined format for reports from Cucumber.

REPORTS

Report are generated after tests and saved in targets folder:
cucumber/index.html - HTML report.

HOW TO RUN IT

Should be installed Maven before running.
Open command line and navigate to folder with project.
Run following command in command line: mvn test ro mvn install.
After that tests will be running.
After that check target folder for reports.