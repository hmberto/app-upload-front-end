import 'cypress-file-upload'

it('Upload Image too large', () => {
  cy.visit('/')
  const weirdo = './../../img/img02.png'
  cy.get('.sc-hKgILt').attachFile(weirdo, { subjectType: 'drag-n-drop', filePath: weirdo })
})