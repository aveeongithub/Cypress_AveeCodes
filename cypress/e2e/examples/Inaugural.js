//Cy generally tends to prefer Mocha or Jasmine.
//On Mocha or Jasmine we genrally have suite level (describe) and at Test Level (it) optimization syncing in functions
//To get auto-suggestions on Cy please include line 5 on the top of your dependencies

/// <reference types='Cypress' />
/// <reference types="cypress-iframe" />
import 'cypress-iframe' //frameloaded
import HomePage from '../examples/PageObjects/RSA_Homepage'

describe('Test Suite', function(){

    xit('Test Case 1', function(){
        //Codes to run your specific test case
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
            console.log("user is on the Test Site");
                cy.get('.search-keyword').type('Ca');
                    cy.wait(3000);
                        cy.get('.product').should('have.length.at.least',1); //Validation for start of product names should be starting with CA! --REV SHWETA
                            cy.wait(2000);
                            cy.get('.products').as('productlocator'); //Alias created for .product for code optimization
                                //cy.get('.products').find('.product').should('have.length.at.least',4); //Find chained method will only look for elements inside the product tag that is mentioned in the get Method.
                                    cy.get('@productlocator').find('.product').eq(0).contains('ADD TO CART').click(); //Example of parent-child spinning also HARD CODED - DYNAMIC FUNCTION UP NEXT
                                    //The user wants to get the product list and click on one particular product -- Dynamic
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
                                            

                                            //###### WHAT WONT WORK ######

                                            /* const logo =cy.get('.brand');
                                            cy.log(logo.text()); */ //Fails because promises are being automatically being handled by Cypress

                                            //############################
                                        });
                                        cy.get('.cart-icon > img').click();
                                            cy.wait(2000);
                
                                    });
            });

            

    xit('Test Case 2', function(){
        //Codes to run your specific test case
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('.search-keyword').type('ca')
                cy.wait(2000);
                //selenium get hit url in browser, cypress get acts like findElement of selenium
 
                    //Parent child chaining
                    cy.get('.products').as('productLocator')
                    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
                    const textVeg=$el.find('h4.product-name').text()
                        if(textVeg.includes('Cashews'))
                        {
                            $el.find('button').click();
                        }
                    })
                cy.get('.cart-icon > img').click()
        });

        it('Handling WebElements',function() {
 
            //Check boxes with assertions
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
                cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
                    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
                        cy.get('input[type="checkbox"]').check(['option2','option3']);
             
            //Static Dropdown
             cy.get('select').select('option2').should('have.value','option2');
             
            //Dynamic dropdowns
            cy.get('#autocomplete').type('ind');
                cy.get('.ui-menu-item div').each(($e1, index, $list) => {
             
                if($e1.text()==="India")
                {
                    $e1.trigger('click');
                }
             });
            
            //autocomplete
            cy.get('#autocomplete').should('have.value','India');
            
            //visible invisible
            cy.get('#displayed-text').should('be.visible');
                cy.get('#hide-textbox').click();
                    cy.get('#displayed-text').should('not.be.visible');
                        cy.get('#show-textbox').click();
                            cy.get('#displayed-text').should('be.visible');
             
            //radio buttons
            cy.get('[value="radio2"]').check().should('be.checked');
             
        });

        xit('Window Handling and Navigation',function() {
            //Alert
            cy.visit("http://qaclickacademy.com/practice.php");
                cy.wait(3000);
                cy.get('#alertbtn').click();
                     cy.get('[value="Confirm"]').click();
            //window:alert
            cy.on('window:alert',(str)=>
            {
                //Mocha
                expect(str).to.equal('Hello , share this practice page and share your knowledge');
            })
            cy.on('window:confirm',(str)=>
            {
                //Mocha
                expect(str).to.equal('Hello , Are you sure you want to confirm?');
            })
            //Handle Child window approach 1 or go for prop() [get attribute from href and paste it in the url]
            cy.get('#opentab').invoke('removeAttr','target').click();
            cy.url().should('include','qaclickacademy')
            cy.go('back')
            });

            //Setting up data from Fixtures from hooks
            before (function(){
                    cy.fixture('example').then(function(data){
                        this.data=data;
                    });
            }); 

            xit('Page Object Model and Data from JSON', function(){
                const homePage = new HomePage(); //Creating Object for Page Object Model
                //Codes to run your specific test case
                cy.visit(Cypress.env('QA'));
                //implementing Page objects as well
                    //cy.get('.search-keyword').type(this.data.name); 
                    homePage.getSearch().type(this.data.name);//Sending data from the .json file
                        cy.pause();
                    });

            xit('Visual Regression Tests', function(){
                cy.visit("http://digitalpitcher.in/#home");
                    cy.document().toMatchImageSnapshot();
            });

            xit('Visual Regression Test Initial Tests', function(){
                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
                    cy.get('.search-button').toMatchImageSnapshot();
            });

           /* xit('Loads the homepage', function() {
                // Load the page or perform any other interactions with the app.
                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
            
                // Take a snapshot for visual diffing
                cy.percySnapshot('Homepage test');
              }); */

              xit('To display all the dropdowns', (a,b)=>{
                return a+b ;
                 })


              xit('XHR Automation',function() {
 
                cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
                //requestobject, responseojbect (Both as Json)
                cy.intercept({
                    method : 'GET',
                    url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
                },
             
                 {
                     statusCode : 200,
                     body : [{
                            "book_name": "RestAssured with Java",
                            "isbn": "RSU",
                            "aisle": "2301"    }]
                      
                 }).as('XHRVar')

                 cy.get("button[class='btn btn-primary']").click();
                 cy.wait('@XHRVar').should(({request,response})=>
                 {
                     cy.get('tr').should('have.length',response.body.length+1) //Validation for the response in the backend to what is shown in the UI
                  
                 })
                 cy.get('p').should('have.text','Oops only 1 Book available')
                });
                    // .as to save it as a variable



               
    });