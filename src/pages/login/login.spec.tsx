import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import LoginPage from './login'

describe("Login Page Tests", () => {
    it("Should return required fields", () => {
        // Add your test logic here
        // Follow AAA Rule

        render(<LoginPage />)
        // Assert (Optional: Check if text "login" is in the document)
        expect(document.body.textContent).toContain("Login")


    })
})
