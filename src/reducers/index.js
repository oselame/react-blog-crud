import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostReducer from './PostReducer';

const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer
});

//-- sempre usar o nome do reducer "form" quando usar redux-form
export default rootReducer;
