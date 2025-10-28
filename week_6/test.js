const session = require('express-session');
const express = require('express');
const { database } = require("./database")
// const FileStore = require('session-file-store')(session);
const app = express()
app.use(express.urlencoded());
// const FileStoreOptions = {}
// Use the session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,            // don't save session if unmodified
  saveUninitialized: true,  // save new sessions
  cookie: { maxAge: 60000 } // 1 minute
}));

app.get('/login', (req, res) => {
  res.send(`
    <form method="post" action="/login">
      <input type="text" name="email">
      <input type="text" name="password">
      <button>Login</button>
    </form>
    <button>Login with IG</button>
    <button>Login with Github</button>
    `)
});

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  // TODO: Check login method
  // TODO: Local (Our Database)
  const foundUser = database.find((user) => user.email === email && user.password === password);
  // TODO: Social (Third Party DB)
  if (!foundUser) return res.redirect("/login");
  req.session.user = foundUser.email; // ! This is the login step
  console.log(email, password);
  res.redirect("/dashboard")
});


function isLoggedIn(req, res, next) {
  if (req.session.user) return next();
  res.redirect("/login");
}

// ! TODO: Make this page protected
app.get('/dashboard', isLoggedIn, (req, res) => {
  res.send("welcome to the dashboard")
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));