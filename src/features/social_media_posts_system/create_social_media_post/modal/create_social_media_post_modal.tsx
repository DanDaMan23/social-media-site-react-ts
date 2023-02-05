import { FC, useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { SubmitHandler, useForm } from "react-hook-form"
import { SocialMediaPostsContext } from "../../contexts/social-media-posts.context"
import CreateSocialMedialPostForm from "../form/create_social_media_post_form"
import ICreateSocialMedialPostFormFields from "../form/social_media_post_form_fields.interface"

interface ICreateSocialMedialPostModal {
  show: boolean
  onClose: () => void
}

const CreateSocialMedialPostModal: FC<ICreateSocialMedialPostModal> = ({
  show,
  onClose
}) => {
  const { createNewPost } = useContext(SocialMediaPostsContext)

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<ICreateSocialMedialPostFormFields>()
  const onSubmit: SubmitHandler<ICreateSocialMedialPostFormFields> = (data) => {
    // console.log(data)
    createNewPost(data)
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateSocialMedialPostForm register={register} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateSocialMedialPostModal
