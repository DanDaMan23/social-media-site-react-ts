import { FC } from "react"
import SocialMediaPostsContextProvider from "./contexts/social-media-posts.context"
import SocialMediaPosts from "./social_media_posts/social-media-posts"

const SocialMediaPostsSystem: FC = () => {
  return (
    <SocialMediaPostsContextProvider>
      Social Media Posts System
      <SocialMediaPosts />
    </SocialMediaPostsContextProvider>
  )
}

export default SocialMediaPostsSystem
