import { FC } from "react"
import SocialMediaPostsContextProvider from "./contexts/social-media-posts.context"
import SocialMediaPosts from "./social_media_posts/social-media-posts"

const SocialMediaPostsSystem: FC = () => {
  return (
    <SocialMediaPostsContextProvider>
      <h1>Social Media Posts System</h1>
      <SocialMediaPosts />
    </SocialMediaPostsContextProvider>
  )
}

export default SocialMediaPostsSystem
