import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { w3schoolCheckbox } from "../pageObjects/checkbox.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let w3school = new w3schoolCheckbox;
   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on W3School page$/, async () => {
        await w3school.Open();
    });

    this.Then(/^I click box icon$/, async () => {
        await w3school.Checkbox();
    
    });

    this.Then(/^the box has been checked$/, async () => {
        await w3school.Click();
    });


}
