describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero Section", () => {
    it("The H1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("The features on a homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context('Courses Section', () => {
    it('Course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find("a").eq(3).click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
    })

    it.only('Course: Testing Foundation', () => {
      cy.getByData('course-1').find('a').eq(3).click()
      cy.location('pathname').should('eq', '/testing-foundations')
    })

    it.only('Course: Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').eq(3).click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
    })
  })
})
