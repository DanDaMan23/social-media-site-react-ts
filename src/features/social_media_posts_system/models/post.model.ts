export default class PostModel {
  id: number
  content: string
  user: number
  comment: number[]

  constructor(id: number, content: string, user: number, comment: number[]) {
    this.id = id
    this.content = content
    this.user = user
    this.comment = comment
  }
}
