import Joi from 'joi';

class ArticleHelper {
  constructor(content) {
    this.content = content;
  }

  validateArticle() {
    const validatArticle = this.content;
    const schema = {
      title: Joi.string().min(3).required(),
      article: Joi.string().min(5).required(),
    };
    return Joi.validate(validatArticle, schema);
  }

  validateArticleComment() {
    const comment = this.content;
    const schema = {
      comment: Joi.string().min(10).required(),
    };
    return Joi.validate(comment, schema);
  }
}
export default ArticleHelper;
