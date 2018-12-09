$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Positive.feature");
formatter.feature({
  "line": 1,
  "name": "FinReach",
  "description": "",
  "id": "finreach",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "positive Login",
  "description": "",
  "id": "finreach;positive-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://cafetownsend-angular-rails.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User puts \"Luke\" to Login field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Names puts \"Skywalker\" to Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User presses on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "List of users should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 5178747882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 11
    }
  ],
  "location": "Annotation.putLogin(String)"
});
formatter.result({
  "duration": 672387603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skywalker",
      "offset": 12
    }
  ],
  "location": "Annotation.putPassword(String)"
});
formatter.result({
  "duration": 104957746,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLogin()"
});
formatter.result({
  "duration": 83051189,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.listOfRecords()"
});
formatter.result({
  "duration": 613166130,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "positive Logout",
  "description": "",
  "id": "finreach;positive-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User navigates to \"https://cafetownsend-angular-rails.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User puts \"Luke\" to Login field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Names puts \"Skywalker\" to Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User presses on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "List of users should be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User logs out",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Login and Password fields should be empty",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 824086820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 11
    }
  ],
  "location": "Annotation.putLogin(String)"
});
formatter.result({
  "duration": 620165964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skywalker",
      "offset": 12
    }
  ],
  "location": "Annotation.putPassword(String)"
});
formatter.result({
  "duration": 93710028,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLogin()"
});
formatter.result({
  "duration": 73128128,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.listOfRecords()"
});
formatter.result({
  "duration": 1077872517,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.logOut()"
});
formatter.result({
  "duration": 118962546,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.fieldsAreEmpty()"
});
formatter.result({
  "duration": 64993515,
  "error_message": "java.lang.AssertionError: Password is not empty. Should be empty expected [] but found [Skywalker]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat finReach.Annotation.fieldsAreEmpty(Annotation.java:83)\r\n\tat ✽.Then Login and Password fields should be empty(Positive.feature:17)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "login with wrong password",
  "description": "",
  "id": "finreach;login-with-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User navigates to \"https://cafetownsend-angular-rails.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User puts \"Luke\" to Login field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Names puts \"Sky\" to Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User presses on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Error message is shown \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 565528510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 11
    }
  ],
  "location": "Annotation.putLogin(String)"
});
formatter.result({
  "duration": 620460404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sky",
      "offset": 12
    }
  ],
  "location": "Annotation.putPassword(String)"
});
formatter.result({
  "duration": 76380434,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLogin()"
});
formatter.result({
  "duration": 76897467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid username or password!",
      "offset": 24
    }
  ],
  "location": "Annotation.errorMessageShown(String)"
});
formatter.result({
  "duration": 666001665,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "login with wrong login",
  "description": "",
  "id": "finreach;login-with-wrong-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User navigates to \"https://cafetownsend-angular-rails.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User puts \"Lue\" to Login field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Names puts \"Skywalker\" to Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User presses on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Error message is shown \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 515315987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lue",
      "offset": 11
    }
  ],
  "location": "Annotation.putLogin(String)"
});
formatter.result({
  "duration": 616573673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skywalker",
      "offset": 12
    }
  ],
  "location": "Annotation.putPassword(String)"
});
formatter.result({
  "duration": 98881643,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLogin()"
});
formatter.result({
  "duration": 82542494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid username or password!",
      "offset": 24
    }
  ],
  "location": "Annotation.errorMessageShown(String)"
});
formatter.result({
  "duration": 609908691,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "create new user",
  "description": "",
  "id": "finreach;create-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User navigates to \"https://cafetownsend-angular-rails.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User puts \"Luke\" to Login field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Names puts \"Skywalker\" to Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User presses on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "List of users should be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User presses Create",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User adds \"firstName\" to First Name",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User adds \"lastName\" to Last Name",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User adds \"2018-12-28\" to Start Date",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User adds \"fakemail@mail.com\" to Email",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 259698864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 11
    }
  ],
  "location": "Annotation.putLogin(String)"
});
formatter.result({
  "duration": 632268134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skywalker",
      "offset": 12
    }
  ],
  "location": "Annotation.putPassword(String)"
});
formatter.result({
  "duration": 120131965,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLogin()"
});
formatter.result({
  "duration": 96401038,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.listOfRecords()"
});
formatter.result({
  "duration": 619515503,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressCreate()"
});
formatter.result({
  "duration": 166868947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 11
    }
  ],
  "location": "Annotation.addFirstName(String)"
});
formatter.result({
  "duration": 1208629323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 11
    }
  ],
  "location": "Annotation.addLastName(String)"
});
formatter.result({
  "duration": 122706868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-12-28",
      "offset": 11
    }
  ],
  "location": "Annotation.addDate(String)"
});
formatter.result({
  "duration": 129225592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fakemail@mail.com",
      "offset": 11
    }
  ],
  "location": "Annotation.addEmail(String)"
});
formatter.result({
  "duration": 154705837,
  "status": "passed"
});
});