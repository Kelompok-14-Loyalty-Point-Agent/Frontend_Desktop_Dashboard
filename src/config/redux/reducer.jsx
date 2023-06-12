import { combineReducers } from 'redux';
import { signInReducer } from './signin/SignInSlice';

const reducer = combineReducers({
	signIn: signInReducer,
});

export default reducer;
