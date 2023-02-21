import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { FC, useEffect, useState } from "react"
import { MockSocialMediaPostsContextProvider } from "../../../contexts/context_test_helpers/social-media-posts.context.test-helpers"
import CreateSocialMedialPostModal from "../create_social_media_post_modal"

interface IRenderCreateModal {
  show?: boolean
  createNewPost?: jest.Mock
  onClose?: jest.Mock
}

const renderCreateModal = ({
  show = true,
  createNewPost = jest.fn(),
  onClose = jest.fn()
}: IRenderCreateModal = {}) => {
  const TestComponent: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
      setShowModal(show)
    }, [])

    return (
      <MockSocialMediaPostsContextProvider createNewPost={createNewPost}>
        <CreateSocialMedialPostModal show={showModal} onClose={onClose} />
      </MockSocialMediaPostsContextProvider>
    )
  }

  return render(<TestComponent />)
}

describe("create-posts-modal test", () => {
  it("should render correctly when show is true", () => {
    const { baseElement } = renderCreateModal()

    expect(baseElement).toMatchSnapshot()
  })

  it("should not show up when show is false", () => {
    const { baseElement } = renderCreateModal({ show: false })

    expect(baseElement).toMatchSnapshot()
  })

  it("should check when submit button can be clicked or not", async () => {
    renderCreateModal()

    const postContentInput = screen.getByLabelText("Post Content")
    const submitButton = screen.getByText("Submit")

    fireEvent.change(postContentInput, { target: { value: "Hello World" } })
    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })
  })
})
