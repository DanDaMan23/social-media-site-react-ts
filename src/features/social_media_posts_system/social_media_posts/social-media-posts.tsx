import { FC, useContext, useEffect } from "react"
import { SocialMediaPostsContext } from "../contexts/social-media-posts.context"
import SocialMediaPost from "./social_media_post/social-media-post"

const SocialMediaPosts: FC = () => {
  const { posts } = useContext(SocialMediaPostsContext)

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <>
      {posts.map(({ id, content, username }) => (
        <SocialMediaPost key={id} body={content} user={username}/>
      ))}
    </>
  )
}

export default SocialMediaPosts
