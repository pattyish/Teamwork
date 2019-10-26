import articleModel from './usersModel';

class Article {
  constructor(articleContent, articleAuthor) {
    this.id = articleModel.generateId();
    this.title = articleContent.title;
    this.article = articleContent.article;
    this.date = new Date();
    this.authorId = articleAuthor.id;
  }

  displayArticle() {
    return ({
      id: this.id,
      title: this.title,
      article: this.article,
      date: this.date,
      author: this.authorId,
    });
  }
}

export default Article;
