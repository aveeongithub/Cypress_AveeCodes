/// <reference types='Cypress' />
/// <reference types="cypress-iframe" />
import 'cypress-iframe' //frameloaded
import HomePage from './PageObjects/RSA_Homepage'
const homePage = new HomePage();

describe('Dirico Test Suite', function(){


    let str='AlPHa BeTA GaMma';
    //let splitter=str.split(0,5);
    let newStr= str.toLowercase();
    if(newStr.includes("/b")){
        newStr.split(indexof('/b'), indexof('/b')+1);
            let finalStr=newStr.toUppercase(indexof('/b')+1);
                return finalStr;
    }


    //Data passed from Fixture
    before (function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        });
    }); 


    it('Task 1 - Login using Credentials', function(){
        //cy.visit('https://login.dirico.io/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dc3client_code%26redirect_uri%3Dhttps%253A%252F%252Fapp.dirico.io%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520client%2520api%26state%3Daf2525e0ae304f19bd9b1e43e57e5c9d%26code_challenge%3DobYmAT1nQ4rS6hdP5UETAlGWIfYlf2yaPBkSJyCtcnA%26code_challenge_method%3DS256%26response_mode%3Dquery');
        //Using ENV from Config
        cy.visit(Cypress.env('DiricoTest'));
        //Page Object Model from RSA_Homepage.js
            //homePage.diricoEmail().type('avinandan25dey@gmail.com');
            homePage.diricoEmail().type(this.data.email);
            //cy.get('.jss215').type('avinandan25dey@gmail.com');
                cy.wait(1000);
                    cy.get('.jss253').click().then(function(){
                        cy.wait(1000);
                    cy.get('input[name="password"]').type('Anythingworks1!');
                    });
                    cy.get('div#react-root button[type="submit"]').click();
                    cy.get('md-dialog-actions > .md-raised').should('be.visible');
            })

    xit('Task 2 and 3- Create a new topic with a topic-category and a responsible user and Save it', function(){
        //Using ENV from Config
        cy.visit(Cypress.env('DiricoTest'));
        //Page Object Model from RSA_Homepage.js
            homePage.diricoEmail().type('avinandan25dey@gmail.com');
            //cy.get('.jss215').type('avinandan25dey@gmail.com');
                cy.wait(1000);
                    cy.get('.jss253').click().then(function(){
                        cy.wait(1000);
                    cy.get('input[name="password"]').type('Anythingworks1!');
                    });
                    cy.get('div#react-root button[type="submit"]').click();
                    
                    cy.get('md-dialog-actions > .md-raised').click();
                    cy.get('.MuiToolbar-root > .MuiButtonBase-root',{ timeout: 10000 }).click().then(function(){
                        cy.get('[href="topics/all"] > .MuiButtonBase-root').click();
                            cy.get('.MuiFab-root').click();
                            cy.get('.MuiToolbar-root > .MuiTypography-root').should('have.text',('Create new topic')).then(function(){
                                cy.get('#downshift-0-input').click();
                                cy.get('checkbox').check().should('be.checked').and('have.value','123');
                                cy.get('input#downshift-18-input').click();
                                cy.get('select').select('option2').should('have.value','Alexander Kleinen');
                                cy.get('#body > div:nth-child(23) > div.MuiPaper-root.MuiPopover-paper.jss382.jss383.MuiPaper-elevation8.MuiPaper-rounded > div.jss384 > div > div > div.MuiGrid-root.jss381.MuiGrid-item > div > div > div:nth-child(6) > div > div > div > button:nth-child(1) > span.MuiButton-label').click();
                            })

                    })

    })

    xit('Task 4 and 5 - Create a new content directly out of the new topic in the related items tab', function(){
        cy.visit(Cypress.env('DiricoTest'));
        //Page Object Model from RSA_Homepage.js
            homePage.diricoEmail().type('avinandan25dey@gmail.com');
            //cy.get('.jss215').type('avinandan25dey@gmail.com');
                cy.wait(1000);
                    cy.get('.jss253').click().then(function(){
                        cy.wait(1000);
                    cy.get('input[name="password"]').type('Anythingworks1!');
                    });
                    cy.get('div#react-root button[type="submit"]').click();
                    cy.get('.MuiToolbar-root > .MuiButtonBase-root',{ timeout: 10000 }).click().then(function(){
                        cy.get('[href="topics/all"] > .MuiButtonBase-root').click();
                            cy.get('ng-outlet#content div.jss153.active-item > div > div:nth-child(2) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-10').click().then(function(){
                                cy.get('body#body span.MuiButton-label > span').click();
                                cy.get('ng-outlet#content button[type="button"].MuiButtonBase-root.MuiTab-root.jss282.MuiTab-textColorPrimary.Mui-selected > span.MuiTab-wrapper').click();
                                //Getting Contents
                                cy.get('div#strategy div.jss36 > div > div > nav > div.MuiButtonBase-root.MuiListItem-root.jss371.MuiListItem-gutters.MuiListItem-button.Mui-selected > div.MuiListItemText-root > span').click().then(()=>{
                                    //Adding Content Details
                                        cy.get('div#strategy div.jss36 > div > div > nav > div.MuiButtonBase-root.MuiListItem-root.jss371.MuiListItem-gutters.MuiListItem-button.Mui-selected > div.MuiListItemText-root > span').click();
                                        //Moving to Strategy
                                        cy.get('body#body span > div > div:nth-child(2) > div > div > div > div.MuiPaper-root.MuiPaper-elevation5 > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > button[type="button"].MuiButtonBase-root.MuiTab-root.jss282.MuiTab-textColorPrimary.Mui-selected > span.MuiTab-wrapper').click();
                                        //Validation of the texts provided
                                        cy.get('body#body div:nth-child(2) > div > div > div > div > div.MuiButtonBase-root.MuiChip-root.jss289.MuiChip-clickable.MuiChip-deletable > span.MuiChip-label').should('have.text','praj');
                                        cy.get('body#body div:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div > div > span.MuiChip-label').should('have.text','Alexander Kleinen');

                                })
                            })
                    })

    })

})