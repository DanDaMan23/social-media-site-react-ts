export default class PostModel {
  id: number
  content: string
  username: string
  comment: number[]

  constructor(id: number, content: string, username: string, comment: number[]) {
    this.id = id
    this.content = content
    this.username = username
    this.comment = comment
  }
}
