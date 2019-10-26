class Comment {
  constructor(commentContent) {
    this.id = Date.now().toString();
    this.comment = commentContent.comment;
  }

  displayComment() {
    return ({
      id: this.id,
      comment: this.comment,
    });
  }
}

export default Comment;
