import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { checkboxRepository } from "../objectRepository/checkbox.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class w3schoolCheckbox {
    w3schoolCheckbox: checkboxRepository;

    constructor(){
        this.w3schoolCheckbox = new checkboxRepository;
    }


    public async Open (){
        await browser.navigate().to("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_checkbox");
    }

    public async Checkbox (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.w3schoolCheckbox.checkbox), defaultTimeout, "Checkbox has incorrect locator");
        await browser.actions().mouseMove(this.w3schoolCheckbox.checkbox).perform();
    }


    public async Click (){
        await browser.actions().click(this.w3schoolCheckbox.checkbox).perform();
        await browser.sleep(2000);
        await this.w3schoolCheckbox.checkbox.isSelected();
    }


}