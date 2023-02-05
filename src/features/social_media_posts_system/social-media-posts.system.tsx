import { FC } from "react"
import SocialMediaPostsContextProvider from "./contexts/social-media-posts.context"
import CreateSocialMediaPost from "./create_social_media_post/create_social_media_post"
import SocialMediaPosts from "./social_media_posts/social-media-posts"

const SocialMediaPostsSystem: FC = () => {
  return (
    <SocialMediaPostsContextProvider>
      <h1>Social Media Posts System</h1>
      <CreateSocialMediaPost />
      <SocialMediaPosts />
    </SocialMediaPostsContextProvider>
  )
}

export default SocialMediaPostsSystem
