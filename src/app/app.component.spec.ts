import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
    });
    cy.viewport(700, 700);
  });

  it('mounts', () => {
    cy.mount(AppComponent);
  });

  describe('when first name', () => {
    it('is empty, should display error', () => {
      cy.mount(AppComponent);
      cy.get('#firstName').type('Very very very very long first name').blur();
      cy.get('#firstNameErrors').should(
        'contain.text',
        'At most 30 characters',
      );
    });

    it('is too long, should display error', () => {
      cy.mount(AppComponent);
      cy.get('#firstName').focus().wait(1).blur();
      cy.get('#firstNameErrors').should(
        'contain.text',
        'First Name is required',
      );
    });

    it('fulfills criteria, should not display error', () => {
      cy.mount(AppComponent);
      cy.get('#firstName').type('Halid').blur();
      cy.get('#firstNameErrors').should('not.exist');
    });
  });
});
