import { fireEvent, render, screen } from "@testing-library/react"
import { FC, useEffect, useState } from "react"
import ConfirmModal from "../confirm.modal"

interface IRenderConfirmModal {
  id?: string
  show?: boolean
  onClose?: jest.Mock
  onSubmit?: jest.Mock
}

const renderConfirmModal = ({
  id = "mockId",
  show = true,
  onClose = jest.fn(),
  onSubmit = jest.fn()
}: IRenderConfirmModal = {}) => {
  const TestComponent: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
      setShowModal(show)
    }, [])

    return (
      <ConfirmModal
        id={id}
        show={showModal}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    )
  }

  return render(<TestComponent />)
}

describe("confirm.modal test", () => {
  it("should render modal when show is true", async () => {
    const { baseElement } = renderConfirmModal()

    expect(baseElement).toMatchSnapshot()
  })

  it("should be able to submit", async () => {
    const mockOnSubmit = jest.fn()
    renderConfirmModal({ onSubmit: mockOnSubmit })

    const submitButton = screen.getByRole("button", { name: /yes/i })
    fireEvent.click(submitButton)

    expect(mockOnSubmit).toHaveBeenCalled()
  })

  it("should be able to close", async () => {
    const mockOnClose = jest.fn()
    renderConfirmModal({ onClose: mockOnClose })

    const submitButton = screen.getByRole("button", { name: /no/i })
    fireEvent.click(submitButton)

    expect(mockOnClose).toHaveBeenCalled()
  })

  it("should render modal when show is false", async () => {
    const { baseElement } = renderConfirmModal({ show: false })

    expect(baseElement).toMatchSnapshot()
  })
})
