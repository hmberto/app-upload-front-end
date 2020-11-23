import 'cypress-file-upload'

describe('Upload Image', () => {
  it('Upload Image', () => {
    cy.visit('/')
    const yourFixturePath = './../../img/img01.png'
    cy.get('.sc-hKgILt').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' });
  })

  it('Delete Image', () => {
    cy.visit('/')
    cy.get('button').click({ multiple: true })
  })
})