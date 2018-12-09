package finReach;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class mainPage {
    WebDriver driver;
    public mainPage(WebDriver webDriver){
        this.driver = webDriver;
        PageFactory.initElements(this.driver, this);
    }

	@FindBy(css="label:nth-child(3) > input")
	public WebElement loginField;

	@FindBy(css="label:nth-child(4) > input")
	public WebElement passwordField;

	@FindBy(css="button.main-button")
	public WebElement loginButton;

	@FindBy(id="employee-list")
	public WebElement employeeList;

	@FindBy(css="p.main-button")
	public WebElement logOut;

	@FindBy(css="p.error-message.ng-binding")
	public WebElement errorMessage;

	@FindBy(id="bAdd")
	public WebElement createButton;

	@FindBy(css="label:nth-child(3) > input")
	public WebElement firstName;

	@FindBy(css="label:nth-child(4) > input")
	public WebElement lastName;

	@FindBy(css="label:nth-child(5) > input")
	public WebElement startDate;

	@FindBy(css="label:nth-child(6) > input")
	public WebElement emailField;

	@FindBy(css="button:nth-child(2)")
	public WebElement buttonAdd;












}
