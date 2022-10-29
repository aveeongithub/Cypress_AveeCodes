import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../PageObjects/RSA_Homepage";

let RSAHomePage = new HomePage();

Given(/^the User is on the eCommerce page$/, function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
});

When(/^the user searches for Ca and adds it$/,function(){
    cy.get('.search-keyword').type('Ca');
                    cy.wait(3000);

                        cy.get('.product').should('have.length.at.least',1);
                            cy.wait(2000);
                            cy.get('.products').as('productlocator'); //Alias created for .product for code optimization
                                //cy.get('.products').find('.product').should('have.length.at.least',4); //Find chained method will only look for elements inside the product tag that is mentioned in the get Method.
                                    cy.get('@productlocator').find('.product').eq(0).contains('ADD TO CART').click();
});

Given(/^the User is on the Log in Page$/,function(){
    cy.visit('http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page');

});

Then(/^the User enters "([^\"]*)\"$/,function(Name){
    cy.get('input#username').sendKeys(Name);
})


Then(/^Then I enter the "([^\"]*)\"$/, (Username) => {
    cy.get('tagname#username').type(Username);
});

Then(/^the User does some demo work$/, function(){
    cy.wait(3000);
    cy.get('.products').as('productlocator');
    cy.get('@productlocator').find('.product').each(($e1, index, $list) => {
        const textcollect = $e1.find('h4.product-name').text();
        if(textcollect.includes('Capsicum'))
        {
                $e1.find('button').trigger('click');
        }
        cy.get('.brand').should('have.text',('GREENKART'));
        //Handling Promises Manually in Cypress
        cy.get('.brand').then(function(logotext){
            cy.log(logotext.text()); //text() is a jQuery method
            
        });
    });    
});