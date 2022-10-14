const db = require('../db')
class PostController {
  async createPost(req, res) {
    try {
      const {content, userId} = req.body;
      console.log(content, userId);
      const newPost = await db.query('INSERT INTO feedback (content, user_id) values ($1, $2) RETURNING *', [content, userId]);
      res.json(newPost.rows[0])
    } catch (error) {
      console.log(error.message);
    }
  }

  async getPostsByUser(req, res) {
    try {
      const id = req.query.id;
      const posts = await db.query('SELECT * from feedback where user_id = $1', [id]);
      res.json(posts.rows)
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await db.query('SELECT * from feedback');
      res.json(posts.rows)
    } catch (error) {
      console.log(error.message);
    }
  }

}

module.exports = new PostController()