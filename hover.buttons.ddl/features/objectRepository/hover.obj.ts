import { by, element, ElementFinder } from "protractor";

export class hoverRepository {
   readonly baraholkaButton:ElementFinder = element(by.xpath("//a[@href='http://baraholka.onliner.by']"));
}