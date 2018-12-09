Feature: FinReach

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