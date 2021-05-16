import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { radiobuttonRepository } from "../objectRepository/radiobutton.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class w3schoolRadiobutton {
    w3schoolRadiobutton: radiobuttonRepository;

    constructor(){
        this.w3schoolRadiobutton = new radiobuttonRepository;
    }
    public async Open (){
        await browser.navigate().to("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_radio");
    }

    public async Radiobutton (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.w3schoolRadiobutton.radiobutton), defaultTimeout, "Checkbox has incorrect locator");
        await browser.actions().mouseMove(this.w3schoolRadiobutton.radiobutton).perform();
    }


    public async Click (){
        await browser.actions().click(this.w3schoolRadiobutton.radiobutton).perform();
        await browser.sleep(2000);
        await this.w3schoolRadiobutton.radiobutton.isSelected();
    }


}