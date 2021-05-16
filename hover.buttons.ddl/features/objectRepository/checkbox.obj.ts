import { by, element, ElementFinder } from "protractor";

export class checkboxRepository {
readonly checkbox:ElementFinder = element(by.css("input#vehicle1"));
}