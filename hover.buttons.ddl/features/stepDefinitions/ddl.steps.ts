import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { w3schoolDDL } from "../pageObjects/ddl.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let drodown = new w3schoolDDL

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on W3school page$/, async () => {
        await drodown.Open();
    });

    this.Then(/^DDL is displayed$/, async () => {
        await drodown.Dropdownlist();
    
    });

    this.Then(/^I can select "Audi" from the DDL list$/, async () => {
        await drodown.Click();
    });


}
