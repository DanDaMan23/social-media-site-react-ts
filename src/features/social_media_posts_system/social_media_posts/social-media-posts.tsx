import { FC, useContext, useEffect } from "react"
import { SocialMediaPostsContext } from "../contexts/social-media-posts.context"

const SocialMediaPosts: FC = () => {
  const { getUserHandler } = useContext(SocialMediaPostsContext)

  useEffect(() => {
    getUserHandler()
  }, [getUserHandler])
  return <></>
}

export default SocialMediaPosts
