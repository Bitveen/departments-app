const koa = require('koa');
const exec = require('child_process').exec;
const router = require('koa-router')();

const app = koa();

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
    //exec(`OPEN http://localhost:${PORT}/`); //for "production"
});
