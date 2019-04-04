const router = require('koa-router')()

router.get('/', async (ctx, next) => {
	global.console.log('index2')
    ctx.cookies.set('pvid', Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    pvid: ctx.cookies.get('pvid')
  }
})

router.get('/testAsync', async (ctx) =>{
  const a = await new Promise((resolve,reject) => {
    setTimeout(function () {
        console.log('async a',new Date().getTime())
        resolve('a')
    },1000)
  })
    ctx.body = {
      a
    }
})

module.exports = router
