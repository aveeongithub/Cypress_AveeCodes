
class HomePage{

getSearch()
    {
        return cy.get('.search-keyword');
    }
loginButton()
    {
        return cy.get('.login-cta > a');
    }
username()
    {
         return cy.get('#username');
    }
loginButton()
    {
        return cy.get('#loginButton');
    }
diricoEmail()
    {
    return cy.get('.jss215');
    }
}
export default HomePage;


