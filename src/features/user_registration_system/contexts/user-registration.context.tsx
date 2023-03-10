import { createContext, FC, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { APICallsContext } from "../../api_calls_context/api_calls_context"
import IUserRegistrationFormFields from "../forms/user-registration.form.interface"

interface IUserRegistrationContext {
  createUserHandler: (formFields: IUserRegistrationFormFields) => void
  success: string | null
  error: string | null
}

export const UserRegistrationContext = createContext<IUserRegistrationContext>({
  createUserHandler: () => {},
  success: null,
  error: null
})

const UserRegistrationContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { post } = useContext(APICallsContext)

  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const createUserHandler = async (formFields: IUserRegistrationFormFields) => {
    setSuccess(null)
    setError(null)
    const response = await post("/register/", {
      ...formFields,
      password2: formFields.confirm_password
    })

    if (response.ok) {
      const result = await response.json()
      setSuccess(result)
      navigate("/register/complete")
    } else {
      setError("User Registration Failed")
    }
  }

  const contextValue: IUserRegistrationContext = {
    createUserHandler,
    success,
    error
  }

  return (
    <UserRegistrationContext.Provider value={contextValue}>
      {children}
    </UserRegistrationContext.Provider>
  )
}

export default UserRegistrationContextProvider
