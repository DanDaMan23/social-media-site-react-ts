import { FC, useState } from "react"
import { Button } from "react-bootstrap"
import CreateSocialMedialPostModal from "./modal/create_social_media_post_modal"

const CreateSocialMediaPost: FC = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", margin: 10 }}>
      <Button variant='primary' onClick={handleShow}>
        Create Post
      </Button>

      <CreateSocialMedialPostModal show={show} onClose={handleClose} />
    </div>
  )
}

export default CreateSocialMediaPost
