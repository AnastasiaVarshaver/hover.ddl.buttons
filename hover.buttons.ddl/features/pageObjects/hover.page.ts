import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { hoverRepository } from "../objectRepository/hover.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerHover {
    onlinerHover: hoverRepository;

    constructor(){
        this.onlinerHover = new hoverRepository;
    }


    public async Open (){
        await browser.navigate().to(browser.params.onlinerByURL);
    }

    public async Hover(){
        

        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerHover.baraholkaButton), defaultTimeout, "Button Field wasn't loaded or has incorrect locator");
        await browser.actions().mouseMove(this.onlinerHover.baraholkaButton).perform();
    }


    public async Hover2(){
        let baraholkaButton:string = await this.onlinerHover.baraholkaButton.getCssValue("text-decoration-line");

    }



}