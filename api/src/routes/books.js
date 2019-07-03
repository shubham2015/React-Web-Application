import express from 'express';
import authenticate from '../middleware/authenticate';
import request from 'request-promise';
import { parseString } from 'xml2js';
import util from 'util'; 
const router = express.Router();




router.use(authenticate);

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

/*books:[	
   {
   	goodreadsId:1,
    title:"1984",
    author:"chris",
    covers:[
    "http://images"
    ],
   pages: 200
   },
    {
   	goodreadsId:1,
    title:"cohlen",
    author:"nolan",
    covers:[
    "http://images"
    ],
   pages: 200
   }
   ]*/

});


export default router;