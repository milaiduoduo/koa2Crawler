const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const {resolve} = require('path');
console.log('dirname:%s 是不是？',__dirname);

// resolve(__dirname,'./views')，就是取得绝对路径
//extension是设置要解析的模板后缀
app.use(views(resolve(__dirname,'./views'),{
    extension:'ejs'
}));

app.use(async(ctx,next)=>{
    await ctx.render('index',{
        name:'alice',
        food:'过桥米线！！'
    })
})
app.listen(4000);
console.log('koacrawler runing in port 4000..............')