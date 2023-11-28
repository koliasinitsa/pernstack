const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const todoRouter = require('./routes/todo.routes')


app.use(cors());
app.use(express.json());
app.use('/api', todoRouter)
// app.post("/todo", async (req, res) => {
//     try {
//         const { description } = req.body;
//         const newTodo = await pool.query(
//             `INSERT INTO todo (description) VALUES($1) RETURNING *`,
//         [description]
//         );
//         res.json(newTodo.rows[0])
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }
// })


// app.get("/todo", async (req, res) => {
//     try {
//         const alltodo = await pool.query(
//             `SELECT * FROM todo`
//         );
//         res.json(alltodo.rows);
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }
// })

// app.get("/todo/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await pool.query(
//             `SELECT * FROM todo where todo_id = $1`,
//             [id]
//         );
//         res.json(todo.rows[0]);
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }
// })


// app.put("/todo/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         const updateTodo = await pool.query(
//             `UPDATE todo SET description = $1 WHERE todo_id = $2`,
//             [description, id]
//         )
//         res.json("Todo was updated!");
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }
// })


// app.delete("/todo/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const DELETETodo = await pool.query(
//             `DELETE FROM todo where todo_id = $1`,
//             [id]
//         )
//         res.json("Todo was DELETE!");
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }
// })


app.listen(5000, () => {
    console.log(`server started`);
});

// http://localhost:5000