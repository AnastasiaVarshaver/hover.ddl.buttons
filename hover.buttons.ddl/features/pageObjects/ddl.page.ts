import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { ddlRepository } from "../objectRepository/ddl.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class w3schoolDDL {
    w3schoolDDL: ddlRepository;

    constructor(){
        this.w3schoolDDL = new ddlRepository;
    }
    public async Open (){
        await browser.navigate().to("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select");
    }

    public async Dropdownlist (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.w3schoolDDL.ddl), defaultTimeout, "Drop-down list has incorrect locator");
    }


    public async Click (){
        await console.log (await this.w3schoolDDL.ddl.element(by.cssContainingText("option","Audi")).isSelected());
    }


}