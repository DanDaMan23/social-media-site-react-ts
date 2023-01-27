import { FC } from "react"
import { Card } from "react-bootstrap"

interface ISocialMediaPost {
  id: string
  title: string
  body: string
}

const SocialMediaPost: FC<ISocialMediaPost> = ({ id, title, body }) => {
  return (
    <Card key={id}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card.Body>
    </Card>
  )
}

export default SocialMediaPost
