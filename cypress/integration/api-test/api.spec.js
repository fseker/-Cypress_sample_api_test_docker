it('cy.request() - make a GET request', () => {
  cy.request('https://reqres.in/api/users?page=2')
    .should((response) => {
      expect(response.status).to.eq(200);
    });
});

it('cy.request() - make a GET request', () => {
  cy.request('https://reqres.in/api/unknown')
    .should((response) => {
      expect(response.status).to.eq(200);

    });
});

it('cy.request() - make a GET request single user data', () => {
  cy.request('https://reqres.in/api/users/2')
    .should((response) => {
      expect(response.body.data.first_name).to.eq('Janet');
      expect(response.body.data).to.have.property('email');

    });
});

it('cy.request() - make a GET request unknown 404', () => {
  cy.request({ url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false })
    .should((response) => {
      expect(response.status).to.eq(404);

    });
});
