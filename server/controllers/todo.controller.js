const pool = require('../db');

class TodoController {
    async createTodo(req, res) {
        try {
            const { description } = req.body;
            const newTodo = await pool.query(
                `INSERT INTO todo (description) VALUES($1) RETURNING *`,
                [description]
            );
            res.json(newTodo.rows[0])
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }

    async getAllTodo(req, res) {
        try {
            const alltodo = await pool.query(
                `SELECT * FROM todo`
            );
            res.json(alltodo.rows);
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }

    async getOneTodo(req, res) {
        try {
            const { id } = req.params;
            const todo = await pool.query(
                `SELECT * FROM todo where todo_id = $1`,
                [id]
            );
            res.json(todo.rows[0]);
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }

    async updateTodo(req, res) {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const updateTodo = await pool.query(
                `UPDATE todo SET description = $1 WHERE todo_id = $2`,
                [description, id]
            )
            res.json("Todo was updated!");
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }

    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const DELETETodo = await pool.query(
                `DELETE FROM todo where todo_id = $1`,
                [id]
            )
            res.json("Todo was DELETE!");
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }
}

module.exports = new TodoController();