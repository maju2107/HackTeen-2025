const express = require('express');
const { GetUsers, SignUp, SignIn, Delete, ForgotPassword, Verify, NewPassword } = require('./users');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    GetUsers(req, res);
})

app.post('/signup', (req, res) => {
    SignUp(req, res);
})

app.put('/signin', (req,res) => SignIn(req, res));

app.delete('/delete', (req, res) => Delete(req, res));

app.put('/forgot/password', (req, res)=> ForgotPassword(req, res));

app.put('/verify/code', (req, res) => Verify(req, res));

app.put('/new/password', (req, res)=> NewPassword(req, res));

app.listen(port, (req, res) => {
    console.log(`Ouvindo na porta http://localhost:${port}`);
})