import { FC, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthenticationContext } from "../login_feature/contexts/authentication.context"
import LoginPage from "../login_feature/Login.page"
import SocialMediaPostsSystem from "../social_media_posts_system/social-media-posts.system"
import UserRegistrationSystem from "../user_registration_system/user-registration.system"

const AppRouter: FC = () => {
  const { token } = useContext(AuthenticationContext)

  const authenticatedRoutes = (
    <>
      <Route
        path='/home'
        element={
          <>
            <SocialMediaPostsSystem />
          </>
        }
      />
    </>
  )

  const notAuthenticatedRoutes = (
    <>
      <Route
        path='/login'
        element={
          <>
            <LoginPage />
          </>
        }
      />
      <Route path='/register//*' element={<UserRegistrationSystem />} />
    </>
  )
  return (
    <Routes>
      {!token && notAuthenticatedRoutes}
      {token && authenticatedRoutes}
      <Route path='*' element={<Navigate to={token ? "/home" : "/login"} />} />
    </Routes>
  )
}

export default AppRouter
