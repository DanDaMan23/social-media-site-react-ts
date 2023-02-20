import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { AuthenticationContext } from "../contexts/authentication.context"
import LoginForm from "../Login.form"

const renderLoginForm = (loginHandler: jest.Mock = jest.fn()) => {
  return render(
    <BrowserRouter>
      <AuthenticationContext.Provider
        value={{ token: "", login: loginHandler, error: "" }}
      >
        <LoginForm />
      </AuthenticationContext.Provider>
    </BrowserRouter>
  )
}

describe("Login.form test", () => {
  it("Login form renders properly", () => {
    const { container } = renderLoginForm()

    expect(container).toMatchSnapshot()
  })

  it("Submits the form when it is valid", async () => {
    const mockLoginHandler = jest.fn()

    renderLoginForm(mockLoginHandler)

    const usernameInput = screen.getByRole("textbox", { name: /username/i })
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole("button", { name: /submit/i })

    fireEvent.input(usernameInput, { target: { value: "mockUsername" } })
    fireEvent.input(passwordInput, { target: { value: "mockPassword" } })
    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(mockLoginHandler).toHaveBeenCalledWith(
        "mockUsername",
        "mockPassword"
      )
    })
  })

  it("Fails to submit when form is invalid", async () => {
    const mockLoginHandler = jest.fn()

    renderLoginForm(mockLoginHandler)

    const submitButton = screen.getByRole("button", { name: /submit/i })

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(mockLoginHandler).not.toHaveBeenCalled()
    })
  })
})
