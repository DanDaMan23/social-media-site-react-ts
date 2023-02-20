import { render } from "@testing-library/react"
import CreateSocialMedialPostForm from "../create_social_media_post_form"

describe("create_social_media_posts_form test", () => {
  it("should render correctly", () => {
    const { container } = render(
      <CreateSocialMedialPostForm register={jest.fn()} />
    )

    expect(container).toMatchSnapshot()
  })
})
