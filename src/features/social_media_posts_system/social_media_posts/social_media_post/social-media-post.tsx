import { FC } from "react"
import { Card } from "react-bootstrap"

interface ISocialMediaPost {
  title: string
  body: string
}

const SocialMediaPost: FC<ISocialMediaPost> = ({ title, body }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card.Body>
    </Card>
  )
}

export default SocialMediaPost
