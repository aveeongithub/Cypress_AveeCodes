Feature: Demo Feature for Cypress BDD


#Scenario: Just giving it a try
#Given the User is on the eCommerce page
#When the user searches for Ca and adds it
#Then the User does some demo work


Scenario Outline: Double Name
Given the User is on the Log in Page
Then the User enters "Name"
Example:
|| Name ||
|| Anything ||
|| Anything22 ||

Scenario Outline: Logging in through multiple account
Given I am on the home page
Then I enter the "<Username>"
And I enter the "<password>"
Then I click on the login
Example:
| Username | Password |
| Avinandan | Anything |
| Ambica | Anything2 |
| Shafiq | Anything3 |