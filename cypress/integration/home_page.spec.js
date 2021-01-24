/**
 * TEST CASES
 * 1. Site loads DONE
 * 2. Image displays DONE
 * 3. Button links work DONE
 * 4. Button labels are correct DONE
 * 5. Footer text is correct
 */

// Site loads
describe('The home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  })
})

// Image displays
describe('The image', () => {
  it('is visible', () => {
    cy.get('[data-test=salt-img]')
      .should('be.visible');
  })
})

// Button links work
describe('The button links', () => {
  it('are correct', () => {
    cy.get('[data-test=website] > a')
      .should('have.attr', 'href', '#')

    cy.get('[data-test=bandcamp] > a')
      .should('have.attr', 'href', 'https://saltpdx.bandcamp.com/');

    cy.get('[data-test=facebook] > a')
      .should('have.attr', 'href', 'https://www.facebook.com/saltpdx');

    cy.get('[data-test=instagram] > a')
      .should('have.attr', 'href', 'https://www.instagram.com/salt_pdx/');

    cy.get('[data-test=youtube] > a')
      .should('have.attr', 'href', '#');

    cy.get('[data-test=spotify] > a')
      .should('have.attr', 'href', 'https://open.spotify.com/artist/6vH8UISvwcCk0Rbd0UcCAe?si=kNnCyhbQS-SAuSckJ4NSkw');

    cy.get('[data-test=apple-music] > a')
      .should('have.attr', 'href', 'https://music.apple.com/us/album/bad-posture-single/1547596850');

    cy.get('[data-test=contact] > a')
      .should('have.attr', 'href', 'mailto:bookingsaltpdx@gmail.com');
  })
})

// Button labels are correct
describe('The button labels', () => {
  it('are correct', () => {
    cy.get('[data-test=website]')
      .should('have.text', 'Website');

    cy.get('[data-test=bandcamp]')
    .should('have.text', 'BandCamp');

    cy.get('[data-test=facebook]')
    .should('have.text', 'Facebook');

    cy.get('[data-test=instagram]')
    .should('have.text', 'Instagram');

    cy.get('[data-test=youtube]')
    .should('have.text', 'Youtube');

    cy.get('[data-test=spotify]')
    .should('have.text', 'Spotify');

    cy.get('[data-test=apple-music]')
    .should('have.text', 'Apple Music');

    cy.get('[data-test=contact]')
    .should('have.text', 'Contact');
  })
})

// Footer text is correct
describe('The footer text', () => {
  it('is correct', () => {
    const text = `\u00A9 ${new Date().getFullYear()} | SALT`;
    cy.get('[data-test=footer-text]')
      .should('have.text', text);
  })
})
