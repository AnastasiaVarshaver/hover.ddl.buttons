import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { w3schoolRadiobutton } from "../pageObjects/radiobutton.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let w3school2 = new w3schoolRadiobutton

  
    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on W3school page$/, async () => {
        await w3school2.Open();
    });

    this.Then(/^I click radio button$/, async () => {
        await w3school2.Radiobutton();
     });

     this.Then(/^the button has been selected$/, async () => {
        await w3school2.Click();
     });


}
