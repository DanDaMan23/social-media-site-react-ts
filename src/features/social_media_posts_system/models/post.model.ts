export default class PostModel {
  id: number
  content: string
  username: string
  date_created: Date
  comment: number[]

  constructor(id: number, content: string, username: string, date_created: Date, comment: number[]) {
    this.id = id
    this.content = content
    this.username = username
    this.date_created = date_created
    this.comment = comment
  }
}
