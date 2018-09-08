import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import middleware from './middleware';
import bodyParser from "body-parser";
import environment from './env';
import db from './db';
import routes from './api/routes'


const env = process.env.NODE_ENV || "development";
const envConfig = environment[env];
const PORT = envConfig.port || 3000;

/**
 * Express Instance
 * @public
 */
let app = express();

app.server = http.createServer(app);
app.use(cors());
app.use(morgan());
app.use(middleware());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser());
app.use('/', routes);



app.listen(PORT, () => console.log('Example app listening on port!' + PORT))

export default app;
