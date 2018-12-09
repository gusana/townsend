package finReach;

import config.BaseTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Steps for scenarios for Positive.features
 */
public class Annotation  extends BaseTest {
    public Annotation(){super();}
    WebDriver driver;
    mainPage page;
    WebDriverWait wait;

    public void setUP(String browser)
    {
        if (browser != null){
            protectedBrowser = Browser.Chrome;
        }
        this.driver = getDriver(protectedBrowser);
        setRestartFreq(10);
        wait =new WebDriverWait(driver, 20);
        page = new mainPage(driver);
        waitForLoading();
    }

    @Given("^User navigates to \"(.*)\"$")
    public void goToSite(String url){

        setUP("chrome");
        getLink(url);
    }

   @When("^User puts \"(.*)\" to Login field$")
    public void putLogin(String login) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("label:nth-child(3) > input")));
        page.loginField.sendKeys(login);
   }

    @Then("^Names puts \"(.*)\" to Password field$")
    public void putPassword(String password){

        page.passwordField.sendKeys(password);
    }

    @When("^User presses on Login Button$")
    public void pressLogin(){
        page.loginButton.click();
    }

    @Then("^List of users should be shown$")
    public void listOfRecords(){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("employee-list")));
        page.employeeList.isDisplayed();
    }

    @Then("^User logs out$")
    public void logOut(){
        page.logOut.click();
    }

    @Then("^Login and Password fields should be empty$")
    public void fieldsAreEmpty(){
        String login = page.loginField.getText();

        Object password = ((JavascriptExecutor) driver)
                .executeScript("return arguments[0].value;",driver
                        .findElement(By.cssSelector("label:nth-child(4) > input")));

        assertEquals(login, "", "Login is not empty. Should be empty");
        assertEquals(password.toString(), "", "Password is not empty. Should be empty");
    }

    @Then("^Error message is shown \"(.*)\"$")
    public void errorMessageShown(String message) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("p.error-message.ng-binding")));

        Object errorMess = ((JavascriptExecutor) driver)
                .executeScript("return arguments[0].innerHTML;",driver
                        .findElement(By.cssSelector("p.error-message.ng-binding")));

        assertTrue(message.equals(errorMess.toString()), "There is wrong error message");
    }

    @Then("^User presses Create$")
    public void pressCreate() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("bAdd")));
        page.createButton.click();
    }

    @Then("^User adds \"(.*)\" to First Name$")
    public void addFirstName(String firstName) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("label:nth-child(3) > input")));
        page.firstName.sendKeys(firstName);
    }

    @Then("^User adds \"(.*)\" to Last Name$")
    public void addLastName(String lastName) {
        page.lastName.sendKeys(lastName);
    }

    @Then("^User adds \"(.*)\" to Start Date$")
    public void addDate(String startDate) {
        page.startDate.sendKeys(startDate);
    }

    @Then("^User adds \"(.*)\" to Email$")
    public void addEmail(String email) {
        page.emailField.sendKeys(email);
    }

    @Then("^User presses Add button$")
    public void pressAdd() {
        page.buttonAdd.click();
    }

}
