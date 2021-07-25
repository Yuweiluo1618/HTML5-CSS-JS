const express = require('express');
const dbRouter = require('./routers/db_router');
const ormRouter = require('./routers/orm_router');

const port = 3000;

const app = express();

app.use(dbRouter);
app.use(ormRouter);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});