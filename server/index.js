const Koa = require('koa');
const app = new Koa();
app.use(async(ctx,next)=>{
    ctx.body = '电影首页(use async)'
});
// app.use(function*(next){
//     this.body = '电影首页 use generator!!!';
// })
app.listen(4455);
console.log('koacrawler runing in port 4455..............')