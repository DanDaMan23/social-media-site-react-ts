import { render } from "@testing-library/react"
import SocialMediaPost from "../social-media-post"

describe("social-media-posts test", () => {
  it("should render correctly", () => {
    const { container } = render(
      <SocialMediaPost
        user='mockUser'
        body='mockBody'
        date_created={new Date("2023-01-01")}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should render correctly with custom styles", () => {
    const { container } = render(
      <SocialMediaPost
        user='mockUser'
        body='mockBody'
        date_created={new Date("2023-01-01")}
        style={{ color: "red" }}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
