Feature: The LocalHut Website
    #@wip
    Scenario: As a registered member, I can search the orders
    Given I am on the orders page of the localhut
    When I select the options and search
    Then I get the selected search result