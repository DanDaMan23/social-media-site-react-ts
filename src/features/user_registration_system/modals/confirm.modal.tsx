import { FC, useContext } from "react"
import { Modal, Button, Alert } from "react-bootstrap"
import { UserRegistrationContext } from "../contexts/user-registration.context"

interface IConfirmModal {
  id: string
  show: boolean
  onSubmit: () => void
  onClose: () => void
}

const ConfirmModal: FC<IConfirmModal> = ({ id, show, onClose, onSubmit }) => {
  const { error } = useContext(UserRegistrationContext)
  return (
    <>
      <Modal id={id} show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are your provided information correct?</p>
          {error && <Alert variant='danger'>{error}</Alert>}
        </Modal.Body>
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
