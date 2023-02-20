import { render } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

test("render component correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  expect(container).toMatchSnapshot()
})
