import 'cypress-file-upload'

describe('Upload Image', () => {
  it('Upload Image too large', () => {
    cy.visit('/')
    const yourFixturePath = './../../img/img02.png'
    cy.get('.sc-hKgILt').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' });
  })

  it('Upload Image', () => {
    const yourFixturePath = './../../img/img01.png'
    cy.get('.sc-hKgILt').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' });
  })
})