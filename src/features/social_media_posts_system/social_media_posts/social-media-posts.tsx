import { FC, useContext } from "react"
import { Stack } from "react-bootstrap"
import { SocialMediaPostsContext } from "../contexts/social-media-posts.context"
import SocialMediaPost from "./social_media_post/social-media-post"

const SocialMediaPosts: FC = () => {
  const { posts } = useContext(SocialMediaPostsContext)

  return (
    <Stack gap={3}>
      {posts.map(({ id, content, username, date_created }, index) => (
        <SocialMediaPost
          key={id}
          body={content}
          user={username}
          date_created={date_created}
          style={{ background: index % 2 === 0 ? "#d0e4ea" : "" }}
        />
      ))}
    </Stack>
  )
}

export default SocialMediaPosts
