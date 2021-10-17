const loginRouter = require('./signin');
const contentRouter = require('./content');
const combineRouters = require('koa-combine-routers');

const router = combineRouters(
    loginRouter, 
    contentRouter,
  )

module.exports = router;
