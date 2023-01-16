export { }

describe('Items flow', () => {
  it('Should notify when no items', () => {
    cy.visit('localhost:3000/items')
    cy.contains('No items found')
  })

  it('Should create an items', () => {
    cy.visit('localhost:3000/items')


    cy.fixture('items').then((items) => {
      items.forEach((item: any) => {
        cy.get('#title').type(item.title)
        cy.get('#description').type(item.description)
        cy.get('#imageUrl').type(item.imageUrl)
        cy.get('#createItem button').click()
      })
    })

  })

  it('Should show the created items', () => {
    cy.visit('localhost:3000/items')

    cy.fixture('items').then((items) => {
      items.forEach((item: any) => {
        cy.contains(item.title)
        cy.contains(item.description)
      })
    })
  })
})