/// <reference types='Cypress' />
/// <reference types="cypress-iframe" />
import 'cypress-iframe' //frameloaded
import HomePage from './PageObjects/RSA_Homepage'

const homePage = new HomePage();

describe("Avinandan Portfolio Submission",function(){

    xit("Successful Log in to Evernote", function(){
        cy.visit('https://evernote.com/');
            cy.wait(3000);
            homePage.loginButton().click;
            cy.get('.tagline').contains('Remember');
                homePage.username().type('avinandan25dey@gmail.com');
                homepage.loginButton().click();
                cy.get('#password').type('JMkD_$CLp66HuK?');
                    cy.get('#loginButton').contains('Sign in').click();
                    cy.wait(15000);
                    cy.get('#qa-NAV_HOME > .pno23scUJEgskXIMlBo5').should('be.be.visible');
    })

    xit("Unsuccessful Log in to Evernote", function(){
        cy.visit('https://evernote.com/');
            cy.wait(3000);
            cy.get('.login-cta > a').click();
            cy.get('.tagline').contains('Remember');
                cy.get('#username').type('avinandan25dey@gmail.com');
                cy.get('#loginButton').click();
                cy.get('#password').type('Incorrect');
                    cy.get('#loginButton').contains('Sign in').click();
                    cy.wait(2000);
                    cy.get('#password-wrapper > .error-status').should('have.text','Incorrect password. You modified your password in the past 24 hours.');
                    
    })

    xit("Successful Log in to Evernote and write a Note", function(){
        cy.visit('https://evernote.com/');
            cy.wait(3000);
            cy.get('.login-cta > a').click();
            cy.get('.tagline').contains('Remember');
                cy.get('#username').type('avinandan25dey@gmail.com');
                cy.get('#loginButton').click();
                cy.get('#password').type('JMkD_$CLp66HuK?');
                    cy.get('#loginButton').contains('Sign in').click();
                    cy.wait(15000);
                    //cy.get('#qa-NAV_HOME > .pno23scUJEgskXIMlBo5').should('be.be.visible');
                    cy.get('button#qa-CREATE_NOTE').click();
                       // cy.wait(3000);
                        cy.get('[data-tooltipmark="createtasknavitem"] > .gFTtUgofaZevRPuVgjwI').click();
                            cy.get('#qa-TASKS_MODAL_TITLE').type("Demo Text");
                            cy.wait(1000);
                            cy.get('#qa-TASKS_MODAL_SUBMIT').click();
                            cy.get('.aUsP60cgYkgHDZX4xEIM').click();
                                cy.get('#qa-ACCOUNT_DROPDOWN_LOGOUT').contains('Sign out avinandan25dey@gmail.com').click();
                                cy.get('#qa-LOGOUT_CONFIRM_DIALOG_SUBMIT').contains('Exit anyway').click();
                        
});

it("Successful Log in to Evernote", function(){
    cy.visit('https://evernote.com/');
        cy.wait(3000);
        cy.get('.login-cta > a').click();
        cy.get('.tagline').contains('Remember');
            cy.get('#username').type('avinandan25dey@gmail.com');
            cy.get('#loginButton').click();
            cy.get('#password').type('JMkD_$CLp66HuK?');
                cy.get('#loginButton').contains('Sign in').click();
                cy.wait(15000);
                cy.get('#qa-NAV_HOME > .pno23scUJEgskXIMlBo5').should('be.be.visible');
                cy.wait(3000);
                cy.get('.RGHY_hu48WxQOaLjiRMr').contains('/');
            })




})