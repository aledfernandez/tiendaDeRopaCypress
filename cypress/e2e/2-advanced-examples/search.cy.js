describe ('Search elements',()=>{
    beforeEach (()=>{
        cy.visit('http://automationpractice.com/index.php');
    })
    it('Search for elements with multiple results',()=>{
        
       //cy.visit('/');
       cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
       })
       cy.fixture('searchResult').then((searchResult)=>{
            cy.wait(5000);
            cy.get(searchResult.title).should('contain', 'dress');
            
       })
    })
    it('search for elements with no results',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
       })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.wait(5000);
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
       

    })
})