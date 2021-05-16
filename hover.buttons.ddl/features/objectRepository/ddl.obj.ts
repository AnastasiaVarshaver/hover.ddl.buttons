import { by, element, ElementFinder } from "protractor";

export class ddlRepository {
    readonly ddl:ElementFinder = element(by.id("cars"));
}