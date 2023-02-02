import { FC } from "react"
import { Card } from "react-bootstrap"
import Moment from "moment"

interface ISocialMediaPost {
  user: string
  body: string
  date_created: Date
}

const SocialMediaPost: FC<ISocialMediaPost> = ({
  user,
  body,
  date_created
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{user}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <small>{Moment(date_created).format('LLL').toString()}</small>
      </Card.Body>
    </Card>
  )
}

export default SocialMediaPost
