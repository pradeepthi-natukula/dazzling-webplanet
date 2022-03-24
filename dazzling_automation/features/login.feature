Feature: The LocalHut Website
  @wip
  Scenario: As an Admin, I can log into the secure area

    Given I am on the LocalHut Website
    When I login with "admin@localhut.co.uk" and "Admin@123!" and click login button
    Then I should see the LocalHut welcome screen

    

    # Given I am on the login page
    # When I login with <username> and <password>
    # Then I should see a flash message saying <message>
    

    #Examples:
    #  | username | password             | message                        |
    #  | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #  | foobar   | barfoo               | Your username is invalid!      |

