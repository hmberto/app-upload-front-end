import 'cypress-file-upload'

describe('Upload Image', () => {
  it('Upload Image', () => {
    cy.visit('/')
    const yourFixturePath = './../../img/img01.png'
    cy.get('.sc-hKgILt').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' })
  })
})