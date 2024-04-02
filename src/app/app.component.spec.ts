import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it(`should have as title 'cypress-demo'`, () => {
    cy.mount(AppComponent);
    cy.get('title').should('contain.text', 'cypress-demo');
  });
});
