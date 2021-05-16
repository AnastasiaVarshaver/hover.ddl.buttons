@smoke
Feature: Hover feature    

    Check for hover efficiency

    Scenario: Check that once user hovers over header, menu is being displayed
    Given I am on Onliner
    When I hover over "Барахолка" in page header
    Then the button is highlighted