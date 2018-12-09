package finReach;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions( monochrome = true,
        features = "src/test/resources/",
        format = {"pretty", "html:target/cucumber", "json:target/cucumber/Cucumber.json"},
        dryRun = false,
        glue = "finReach")

public class runTest extends AbstractTestNGCucumberTests {

}