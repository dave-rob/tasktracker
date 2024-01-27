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
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
