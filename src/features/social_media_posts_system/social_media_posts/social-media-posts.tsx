import { FC, useContext, useEffect, useState } from "react"
import { SocialMediaPostsContext } from "../contexts/social-media-posts.context"

const SocialMediaPosts: FC = () => {
  const { posts } = useContext(SocialMediaPostsContext)

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return <></>
}

export default SocialMediaPosts
