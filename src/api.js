import axios from 'axios';

// Acts as a middleware where we make axios calls to the backend server  
export default {
	user :{
		login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user),
        signup: (user) => axios.post('api/users', {user}).then(res => res.data.user)
	}
};