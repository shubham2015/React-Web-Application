//Express js file which contains all the middlewares and routes to different pages

import express from 'express';
import path from 'path';

const app = express();
app.post('/api/auth',(req,res)=>{
	res.status(400).json({ errors: { global:"Invalid "}})
})
app.get('/*',(req,res) => {
	res.sendFile(path.join(__dirname, 'index.html'));

})

app.listen(3200, () => console.log('Server Started'));
