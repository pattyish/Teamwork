const articleModel = {
  articleArray: [
    {
      id: '1',
      title: 'hello',
      article: 'how are you brother',
      date: '2019-9-25T10:37:23.916z',
      authorId: '1',
      comments: [],
    },
    {
      id: '2',
      title: 'hello1',
      article: 'how are you brother3',
      date: '2019-10-25T10:37:23.916z',
      authorId: '2',
      comments: [],
    },
  ],
  addArticle(article) {
    return this.articleArray.push(article);
  },
  getAticles() {
    return this.sortArticle(this.articleArray);
  },
  findArticleById(articleId) {
    return this.articleArray.find(article => article.id === articleId);
  },
  removeArticle(article) {
    const articleIndex = this.articleArray.indexOf(article);
    return this.articleArray.splice(articleIndex, 1);
  },
  generateId() {
    return this.articleArray.length + 1;
  },
  sortArticle(array) {
    const latestArticles = array.sort((latest, old) => (
      new Date(old.date) - new Date(latest.date)
    ));
    return latestArticles;
  },
  createComment(comment, articleMatch) {
    return articleMatch.comments.push(comment);
  },
  getComment(article) {
    return article.comments;
  },
};

export default articleModel;
