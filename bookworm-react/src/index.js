import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider}  from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';
const store =createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
    );
if( localStorage.bookwormJWT){                          //if the local storage has web token ,automatically isAuthenticated is true
	const user ={ token: localStorage.bookwormJWT};    // and therefore even if the app is refreshed and the state disappears
	store.dispatch(userLoggedIn(user));               // we can still get logout option as the state remains fixed
}

ReactDOM.render(
	<BrowserRouter>
	<Provider store={store}>
     <Route component ={App} />
    </Provider>
    </BrowserRouter>,
	document.getElementById('root')
   );
registerServiceWorker();
