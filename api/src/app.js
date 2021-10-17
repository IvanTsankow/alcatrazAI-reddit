const Koa = require('koa');
const json = require('koa-json');
const router = require('./routes/index');
const db = require('./db/db');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors')

app = new Koa();

app
  .use(cors())
  .use(json())
  .use(bodyParser())
  .use(router())

exports.start = async () => {
    try {
      await db.start()
      console.log('Database connected')
      await app.listen(4000)
      console.log('Server listening on port 4000')
    } catch (error) {
      console.log(error);
    }
  }
  
exports.close = async () => {
    try {
        await app.close()
    } catch (error) {
        console.log(error);
    }
// await db.close()
}