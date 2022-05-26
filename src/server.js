const app = require('./index');

const connect = require('./configs/db');

app.listen(1583, async (req, res) => {
    await connect();
    console.log('listening to port 1583');
});