/// <reference types='Cypress' />

before (function(){
    cy.fixture('Nameof the JSOn').then(function(data){
        this.data=data;
    });
}); 

describe('Preqin', function(){
    it('Login Scenario', ()=>{
        //cy.visit(Cy.env(Samplelogin));
        cy.visit("https://www.stealmylogin.com/demo.html");
            cy.get('login').type(this.data.name2);
            cy.get('password').type("Anything");
                cy.get('Submit').click();

    })
})

cy.request({
    'method' : 'POST',
    'url' : 'dummy data'
}).then(function(response){
    expect(response.status).equal(200);
    expect(response.body).to.have.property('MSG');
    //To check the entire response json
    expect(response.body.json).to.deep.equal({
        //JSON Body
    })
})

describe('JWT', function(){
    it('Calls from Command',function(){
        cy.LoginAPI().then(function(){
            //Setting up options for API Calls
            cy.visit('URL',
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
                   
            })
        })
    })
    
})