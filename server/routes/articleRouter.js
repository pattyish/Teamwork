import express from 'express';
import Authorize from '../middleware/validateUser';
import ArticlesControl from '../controllers/articleControllers';

const articleControl = new ArticlesControl();
const athenticate = new Authorize();
const router = express.Router();

router.get('/', athenticate.isValidToken, articleControl.getArticle);
router.get('/:id', athenticate.isValidToken, articleControl.getArticleById);
router.post('/', athenticate.isValidToken, articleControl.createAticle);
router.patch('/:id', athenticate.isValidToken, articleControl.editArticle);
router.post('/:id/comments', athenticate.isValidToken, articleControl.createcommnet);
router.get('/:id/comments', athenticate.isValidToken, articleControl.getComment);
router.delete('/:id', athenticate.isValidToken, articleControl.removeArticle);
export default router;
