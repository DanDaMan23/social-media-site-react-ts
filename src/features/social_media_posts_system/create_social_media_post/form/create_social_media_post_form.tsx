import { FC } from "react"
import { Form } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"
import ICreateSocialMedialPostFormFields from "./social_media_post_form_fields.interface"

export interface ICreateSocialMedialPostForm {
  register: UseFormRegister<ICreateSocialMedialPostFormFields>
}

const CreateSocialMedialPostForm: FC<ICreateSocialMedialPostForm> = ({
  register
}) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='postContent'>
        <Form.Label hidden>Post Content</Form.Label>
        <Form.Control
          {...register("postContent", { required: true, maxLength: 255 })}
          as='textarea'
          rows={10}
        />
      </Form.Group>
    </Form>
  )
}

export default CreateSocialMedialPostForm
