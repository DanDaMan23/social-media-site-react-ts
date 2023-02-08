import { createContext, FC, ReactNode, useContext, useState } from "react"
import OverlaySpinner from "../../components/overlay_spinner/overlay_spinner"
import { AuthenticationContext } from "../login_feature/contexts/authentication.context"

interface IAPICallsContext {
  apiCallWrapper: (
    handlerFunction: () => void,
    errorHandlerFunction: (e: Error) => void
  ) => void
  get: (link: string) => Promise<globalThis.Response>
  post: (link: string, body: {}) => Promise<globalThis.Response>
}

export const APICallsContext = createContext<IAPICallsContext>({
  apiCallWrapper: () => {},
  get: () => new Promise<globalThis.Response>(() => {}),
  post: () => new Promise<globalThis.Response>(() => {})
})

export const APICallsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { token } = useContext(AuthenticationContext)
  const [showSpinner, setShowSpinner] = useState<boolean>(false)

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  }

  const apiCallWrapper = (
    handlerFunction: () => void,
    errorHandlerFunction: (e: Error) => void
  ) => {
    setShowSpinner(true)

    try {
      handlerFunction()
    } catch (e) {
      errorHandlerFunction(e as Error)
    }

    setShowSpinner(false)
  }

  const get = async (link: string) =>
    await fetch(link, {
      method: "GET",
      headers
    })

  const post = async (link: string, body: {}) =>
    await fetch(link, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })

  const contextValue: IAPICallsContext = {
    apiCallWrapper,
    get,
    post
  }

  return (
    <APICallsContext.Provider value={contextValue}>
      {showSpinner && <OverlaySpinner />}
      {children}
    </APICallsContext.Provider>
  )
}

export default APICallsContextProvider
