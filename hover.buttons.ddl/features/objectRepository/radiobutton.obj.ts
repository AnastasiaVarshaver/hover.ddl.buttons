import { by, element, ElementFinder } from "protractor";

export class radiobuttonRepository {
    readonly radiobutton:ElementFinder = element(by.css("input#male"));
}