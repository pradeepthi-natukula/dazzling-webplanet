Feature: The Local Hut Website
    #@wip
    Scenario: As a user, I can register into the Admin panel
    Given I am on the register page of the admin panel
    When I register with "archana" and "suspokiyd@yevme.com" and "register123" and "register123" click the register button
    Then I should see the users home page
