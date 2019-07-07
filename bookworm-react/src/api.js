import axios from 'axios';
// Acts as a middleware where we make axios calls to the backend server  

export default {
	user :{
		login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user),
        signup: (user) => axios.post('/api/users', { user }).then(res =>res.data.user)    	                                                            
        //resetPassword:(email)=> axios.post('api/auth/reset_password_request',{email})	                                                            
	},
	books:{
		fetchAll: () => axios.get("/api/books").then(res => res.data.books),
        create: book =>
      axios.post("/api/books", { book }).then(res => res.data.book)
	}
};