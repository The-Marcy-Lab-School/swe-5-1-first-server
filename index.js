const express = require('express');
const app = express();

const path = require('path');
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
app.use(express.static(pathToDistFolder));

app.get("/api/rollDie", (req, res) => {
  res.send({ rolls: Math.ceil(Math.random() * 6) });
})

app.get("/api/picture", (req, res) => {
  res.send({ src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/meowntain-profile_banner-71b7a6d0d943dc9e-480.jpeg' });
})

app.get("/api/joke", (req, res) => {
  res.send({ setup: "what do you call a pile of kittens?", punchline: "a meowntain" });
})

const port = 8080;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})