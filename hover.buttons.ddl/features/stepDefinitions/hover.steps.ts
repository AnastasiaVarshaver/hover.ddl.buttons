import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerHover } from "../pageObjects/hover.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let onliner = new OnlinerHover;
   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner$/, async () => {
        await onliner.Open();
    });

    this.Then(/^I hover over "Барахолка" in page header$/, async () => {
        await onliner.Hover();
    
    });

    this.Then(/^the button is highlighted$/, async () => {
        await onliner.Hover2();
    });


}
