import { FC, useContext, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Spinner, Stack } from "react-bootstrap"
import { SocialMediaPostsContext } from "../contexts/social-media-posts.context"
import SocialMediaPost from "./social_media_post/social-media-post"

const SocialMediaPosts: FC = () => {
  const { posts, getNextPost, hasMorePosts, initialGetPosts } = useContext(
    SocialMediaPostsContext
  )

  useEffect(() => {
    initialGetPosts()
  }, [initialGetPosts])

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={getNextPost}
      hasMore={hasMorePosts}
      loader={
        <div
          key='spinner'
          style={{ display: "flex", justifyContent: "center", margin: 10 }}
        >
          <Spinner animation='border' />
        </div>
      }
    >
      <Stack key='posts' gap={3}>
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
    </InfiniteScroll>
  )
}

export default SocialMediaPosts
