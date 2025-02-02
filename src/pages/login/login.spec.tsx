import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginPage from './login';

describe("Login Page Tests", () => {

    it("Should return required fields", () => {
        render(<LoginPage />);

        // Checking for the Login heading -> make specially for heading 
        expect(screen.getByText(/Sign In/ )).toBeInTheDocument();

        // Checking for input fields by their placeholder text
        expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

        // // Checking for the button with "Login In" text
        // expect(screen.getByRole("button", { name: "Login In" })).toBeInTheDocument();
        // expect(screen.getByRole("checkbox", { name: "Remember me" })).toBeInTheDocument()

        // expect(screen.getByText("Forgot Password")).toBeInTheDocument()
    });


});
