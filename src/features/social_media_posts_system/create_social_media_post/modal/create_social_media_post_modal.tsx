import { FC } from "react"
import { Button, Modal } from "react-bootstrap"

interface ICreateSocialMedialPostModal {
  show: boolean
  onClose: () => void
}

const CreateSocialMedialPostModal: FC<ICreateSocialMedialPostModal> = ({
  show,
  onClose
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>Form</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            console.log("Submit Form")
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateSocialMedialPostModal
