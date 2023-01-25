import { FC, useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { SubmitHandler, useForm } from "react-hook-form"
import { UserRegistrationContext } from "../contexts/user-registration.context"
import UserRegistrationForm from "../forms/user-registration.form"
import IUserRegistrationFormFields from "../forms/user-registration.form.interface"
import ConfirmModal from "../modals/confirm.modal"

const UserRegistrationPage: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const { createUserHandler } = useContext(UserRegistrationContext)

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<IUserRegistrationFormFields>()

  const onSubmit: SubmitHandler<IUserRegistrationFormFields> = (data) => {
    createUserHandler(data)
  }

  return (
    <>
      <UserRegistrationForm register={register} />
      <ConfirmModal
        id='registration-confirm-modal'
        show={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        onSubmit={handleSubmit(onSubmit)}
      />
      <Button
        variant='primary'
        type='submit'
        disabled={!isValid}
        onClick={() => {
          setShowModal(true)
        }}
      >
        Submit
      </Button>
    </>
  )
}

export default UserRegistrationPage
