import { TEXTS } from '../../shared/constants';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Check integrity', () => {
    it('h1 is correct', () => {
      cy.queryByText(TEXTS.HOME_TITLE).should('exist');
    });
    
    it('should prevent a blank page when gets a 404', () => {
      cy.visit('/thispagenotexists')
        .get('#app')
        .children()
        .should('have.length.greaterThan', 0);
    });

    it('should show the people when click at the event', () => {
      cy.get('#communityList')
        .children()
        .first()
        .click()
        .get('#peopleList')
        .children()
        .should('have.length.greaterThan', 0);
    });
  });
  });
});

