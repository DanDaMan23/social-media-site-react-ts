import { FC } from "react"
import { Modal, Button } from "react-bootstrap"

interface IConfirmModal {
  id: string
  show: boolean
  onSubmit: () => void
  onClose: () => void
}

const ConfirmModal: FC<IConfirmModal> = ({ id, show, onClose, onSubmit }) => {
  return (
    <>
      <Modal id={id} show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your provided information correct?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onClose}>
            No
          </Button>
          <Button variant='primary' onClick={onSubmit}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmModal
