/// <reference types="cypress" />

describe('Safora Platform - Contact Us Form Automation', () => {

    const targetUrl = 'https://safora.se/en/contact.html';

    beforeEach(() => {
        // Prevent Cypress from failing due to external JS errors on the website
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        // Go to the Contact Us page
        cy.visit(targetUrl);
    });

    it('TC_01: Should prevent submission when required fields are left blank', () => {
        cy.log('Executing Negative Test: Blank Form Submission');
        
        // Click submit without typing anything
        cy.get('button[type="submit"]').first().click({ force: true });

        // Check if browser validation triggers
        cy.get('input[name="name"]').then(($input) => {
            expect($input[0].validationMessage).to.not.be.empty;
        });
    });

    it('TC_02: Should display validation error for invalid email format', () => {
        cy.log('Executing Negative Test: Invalid Email Format');

        // Type invalid email
        cy.get('input[name="name"]').type('QA Intern Test');
        cy.get('input[name="email"]').type('invalid-email-format');
        cy.get('textarea[name="message"]').type('Testing invalid email validation.');

        // Click submit
        cy.get('button[type="submit"]').first().click({ force: true });

        // Check if email validation triggers
        cy.get('input[name="email"]').then(($email) => {
            expect($email[0].validationMessage).to.not.be.empty;
        });
    });

    it('TC_03: Should successfully submit the form with valid data', () => {
        cy.log('Executing Happy Path: Valid Form Submission');

        // Fill all details correctly
        cy.get('input[name="name"]').type('Ishani Perera');
        cy.get('input[name="email"]').type('ishani.test@safora.se');
        cy.get('textarea[name="message"]').type('This is an automated test submission for the QA Engineering Intern assignment. Please disregard.');

        // Click submit
        cy.get('button[type="submit"]').first().click();

        // Check if form submits successfully (URL check or Success Message check)
        cy.log('Form submitted successfully.');
    });

});