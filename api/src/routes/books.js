import express from 'express';
import authenticate from '../middleware/authenticate';
import request from 'request-promise';
import { parseString } from 'xml2js';
import parseErrors from '../utils/parseErrors';
import Book from '../models/Book';
const router = express.Router();
// Store the info abt the book in the user database for an initial user
router.use(authenticate);

//Return all books based on the user id inputed
router.get('/',(req,res)=>{
	Book.find({userId: req.currentUser._id}).then(books => res.json({books}))
});

router.post("/", (req, res) => {
   // console.log("Requesting this for post",req.body.books);
  Book.create({ ...req.body.book, userId: req.currentUser._id })
    .then(book => res.json({ book }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.get("/search",(req,res) =>{
	//console.log("Recei",req.query.q);
	const ur = req.query.q;
	//console.log(ur);
request.get('https://www.goodreads.com/search/index.xml?key=d1bDDVvzjMwXulOE9oEPqw&q=${ur}')
        .then(result => 
        	  parseString(result, (err, goodreadsResult) =>{
        	  	//console.log("Printing",result);
        	  	res.json({books: goodreadsResult.GoodreadsResponse.search[0].results[0].work
        	  	   .map(work=>({
        	  	   	goodreadsId: work.best_book[0].id[0]._,
                    title: work.best_book[0].title[0],
                    authors: work.best_book[0].author[0].name[0],
                    covers:[work.best_book[0].image_url[0]],
                    pages:200
        	  	})
        	  )
        	 })
        	 }	
         	)
        );



});


export default router;