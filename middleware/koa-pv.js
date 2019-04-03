function pv(ctx) {
    global.console.log(ctx.path,ctx)
}

module.exports = function () {
    return async function (ctx,next) {
        pv(ctx)
        await next()
    }
}
