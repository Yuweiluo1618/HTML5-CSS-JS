const express = require('express');

const dbRouter = require('./routers/db_router');
const ormRouter = require('./routers/orm_router');
const ormInsertRouter = require('./routers/orm_insert_router');
const ormDeleteRouter = require('./routers/orm_delete');
const ormUpdateRouter = require('./routers/orm_update');
const ormSQLRouter = require('./routers/orm_sql');
const asyncRouter = require('./routers/async_awiat');

const port = 3000;

const app = express();

app.use(dbRouter);
app.use(ormRouter);
app.use(ormInsertRouter);
app.use(ormDeleteRouter);
app.use(ormUpdateRouter);
app.use(ormSQLRouter);
app.use(asyncRouter);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});