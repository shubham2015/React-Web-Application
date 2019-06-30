//Express js file which contains all the middlewares and routes to different pages

import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import dotenv from 'dotenv';
import Promise from 'bluebird';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
//MongoDb default connection port is 27017 and bookworm is the collection name, User is the document name.
//Setting up  Environment vaiable
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true });

//We are mounting the auth middleware function at api/auth adress
app.use('/api/auth', auth);

app.get('/*',(req,res) => {
	res.sendFile(path.join(__dirname, 'index.html'));

})

app.listen(3200, () => console.log('Server Started'));
