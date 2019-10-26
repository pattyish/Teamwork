import ArticleHelper from '../helpers/articleHelper';
import Article from '../models/articleStore';
import articleModel from '../models/articlesModel';
import ArticleComment from '../models/commentStore';


class ArticlesControl {
  createAticle(req, res) {
    const access = req.token;
    const { body } = req;
    const helper = new ArticleHelper(body);
    const { value, error } = helper.validateArticle();
    if (error) return res.status(406).json({ status: '406', message: error.details[0].message });
    const newArticle = new Article(value, access);
    articleModel.addArticle(newArticle);
    res.status(200).json({ status: '200', message: 'article created successfull' });
  }

  getArticle(req, res) {
    console.log(req.token.email);
    const articles = articleModel.getAticles();
    if (!articles) return res.status(404).json({ status: 200, message: 'there is article in memory' });
    res.status(200).json({ status: '200', message: 'request successfull', data: articles });
  }

  getArticleById(req, res) {
    const { id } = req.params;
    const article = articleModel.findArticleById(id);
    if (!article) return res.status(404).json({ status: '404', message: 'article not found' });
    res.status(200).json({ status: '200', message: 'resqusted article', data: { title: article.title, article: article.article } });
  }


  editArticle(req, res) {
    const { id } = req.params;
    const { body } = req;
    const helper = new ArticleHelper(body);
    const { error } = helper.validateArticle();
    if (error) return res.status(406).json({ status: '406', message: error.details[0].message });
    const articleToEdit = articleModel.findArticleById(id);
    if (!articleToEdit) return res.status(404).json({ status: '404', message: 'article not found' });
    articleToEdit.title = body.title || articleToEdit.title;
    articleToEdit.article = body.article || articleToEdit.article;
    res.status(200).json({ status: '200', message: 'article edited successfull', data: { articleToEdit } });
  }

  removeArticle(req, res) {
    const { id } = req.params;
    const articleToDelete = articleModel.findArticleById(id);
    if (!articleToDelete) return res.status(404).json({ status: '404', message: 'article not found' });
    articleModel.removeArticle(articleToDelete);
    res.status(201).json({ status: '201', message: 'article created successfull' });
  }

  createcommnet(req, res) {
    const { id } = req.params;
    const { body } = req;
    const helper = new ArticleHelper(body);
    const { error } = helper.validateArticleComment();
    if (error) return res.status(406).json({ status: '406', message: error.details[0].message });
    const articleToComment = articleModel.findArticleById(id);
    if (!articleToComment) return res.status(404).json({ status: '404', message: 'article not found' });
    const comment = new ArticleComment(body);
    articleModel.createComment(comment, articleToComment);
    res.status(200).json({ status: '200', message: 'comment created succefull', data: { comment } });
  }

  getComment(req, res) {
    const { id } = req.params;
    const article = articleModel.findArticleById(id);
    if (!article) return res.status(404).json({ status: '404', message: 'article not found' });
    const comments = articleModel.getComment(article);
    res.status(200).json({ status: '200', message: 'all comments on this article', data: { comments } });
  }
}

export default ArticlesControl;
