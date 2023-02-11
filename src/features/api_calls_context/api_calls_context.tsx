import { createContext, FC, ReactNode, useContext } from "react"
import OverlaySpinner from "../../components/overlay_spinner/overlay_spinner"
import { AuthenticationContext } from "../login_feature/contexts/authentication.context"

interface IAPICallsContext {
  get: (link: string) => Promise<globalThis.Response>
  post: (link: string, body: {}) => Promise<globalThis.Response>
}

export const APICallsContext = createContext<IAPICallsContext>({
  get: () => new Promise<globalThis.Response>(() => {}),
  post: () => new Promise<globalThis.Response>(() => {})
})

export const APICallsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { token } = useContext(AuthenticationContext)

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
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
    get,
    post
  }

  return (
    <APICallsContext.Provider value={contextValue}>
      {/* TODO: implement overlay spinner while waiting for API call */}
      {false && <OverlaySpinner />}
      {children}
    </APICallsContext.Provider>
  )
}

export default APICallsContextProvider
