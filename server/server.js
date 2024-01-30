import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  // connectionString: DATABASE_URL,
  host: "localhost",
  user: "postgres",
  password:"123456",
  database: "tasktracker",
  port: 5432
});

await client.connect();

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  client.query("SELECT * FROM users").then((result) => {
    res.send(result.rows);
  });
});

app.get("/api/workspaces/:user_id", (req, res) => {
  const {user_id} = req.params;
  client.query("SELECT * FROM workspaces where owner_id = $1;", [user_id]).then(results => res.send(results.rows))
})

app.get("/api/lists/:workspace_id", (req, res) => {
  const {workspace_id} = req.params;
  client.query("SELECT * FROM lists where workspace_id = $1;", [workspace_id]).then(results => res.send(results.rows))
})

app.get("/api/tasks/:list_id", (req, res) => {
  const {list_id} = req.params;
  client.query("SELECT * FROM tasks where list_id = $1;", [list_id]).then(results => res.send(results.rows))
})

app.post('/api/login', async (req, res) => {
  try{
      const {email, password} = req.body; 
      const {rows} = await client.query("SELECT id FROM users WHERE email = $1 and password = crypt($2, password);", [email, password])
  if (rows.length ===0){
      throw new Error;
  }

  res.send(rows[0]);
  } catch(err){
      console.log("bad login")
      console.log(err);
      res.status(401).send("Incorrect Username and Password!")
  }
})

app.post('/api/workspaces/:user_id', async (req, res) => {
  try{
    const {user_id} = req.params;
      const {name} = req.body; 
      const {rows} = await client.query("INSERT INTO workspaces(name, owner_id) VALUES ($1, $2) returning *;", [name, user_id])
      res.status(200).send(rows);
  
  } catch(err){
      console.log(err);
      res.status(500).send("Internal Server Error")
  }
})

app.post('/api/lists/:workspace_id', async (req, res) => {
  try{
    const {workspace_id} = req.params;
      const {description} = req.body; 
      const {rows} = await client.query("INSERT INTO lists(description, workspace_id) VALUES ($1, $2) returning *;", [description, workspace_id])
      res.status(200).send(rows);
  
  } catch(err){
      console.log(err);
      res.status(500).send("Internal Server Error")
  }
})

app.post('/api/tasks/:list_id', async (req, res) => {
  try{
    const {list_id} = req.params;
      const {description} = req.body; 
      const {rows} = await client.query("INSERT INTO tasks(description, list_id) VALUES ($1, $2) returning *;", [description, list_id])
      res.status(200).send(rows);
  
  } catch(err){
      console.log(err);
      res.status(500).send("Internal Server Error")
  }
})

app.patch('/api/tasks/:task_id', async (req, res) => {
  try{
    const {task_id} = req.params;
    const {list_id} = req.body;
    const {rows} = await client.query("UPDATE tasks SET list_id = $1 WHERE id = $2 returning *;", [list_id, task_id])
    res.send(rows);
  }
  catch(err){
    console.error(err)
    res.status(500).send("Internal Server Error")
  }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
