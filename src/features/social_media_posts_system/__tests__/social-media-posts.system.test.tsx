import { render } from "@testing-library/react"
import SocialMediaPostsSystem from "../social-media-posts.system"

describe("social-media-posts.system test", () => {
  it("should render correctly", () => {
    const { baseElement } = render(<SocialMediaPostsSystem />)

    expect(baseElement).toMatchSnapshot()
  })
})
