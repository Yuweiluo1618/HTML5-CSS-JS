const Koa = require('koa');
const Router = require('koa-router')

const router = new Router()
const app = new Koa();

router.get('/get_data', ctx => {
    ctx.body = "Hello"
}
);

app.use(router.routes());

app.listen(3000, ()=>{
    console.log('server is running');
    
});