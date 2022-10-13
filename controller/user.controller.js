const db = require('../db')
class UserController {
  async createUser(req, res) {
    try {
      const {name, email} = req.body
      const newPerson = await db.query(`INSERT INTO person (name, email) values ($1, $2) RETURNING *`, [name, email])
      res.json(newPerson.rows[0])
    } catch (error) {
      console.log(error.message);
    }
  }
  async getUsers(req, res) {
    try {
      const users = await db.query('SELECT * FROM person')
      res.json(users.rows);
    } catch (error) {
      console.log(error.message);
    }
  }
  async getOneUser(req, res) {
    try {
      const id = req.params.id
      const users = await db.query('SELECT * FROM person where id = $1', [id])
      res.json(users.rows[0])
    } catch (error) {
      console.log(error.message);
    }
  }
  async updateUser(req, res) {
    try {
      const {id, name, email} = req.body
      const user = await db.query('UPDATE person set name = $1, email = $2 where id = $3 RETURNING *', [name, email, id])
      res.json(user.rows[0])
    } catch (error) {
      console.log(error.message);
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id
      const users = await db.query('DELETE FROM person where id = $1', [id])
      res.json(users.rows[0])
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new UserController();
