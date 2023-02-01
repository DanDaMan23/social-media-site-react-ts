import { FC } from "react"
import { Card } from "react-bootstrap"

interface ISocialMediaPost {
  user: string
  body: string
}

const SocialMediaPost: FC<ISocialMediaPost> = ({ user, body }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{user}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card.Body>
    </Card>
  )
}

export default SocialMediaPost
