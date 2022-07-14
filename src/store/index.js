import { applyMiddleware, combineReducers, createStore } from 'redux';
import { productsReducer } from './products/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { filterReducer } from './filter/reducer';
import { groupsReducer } from './groups/reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	groups: groupsReducer,
	filter: filterReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
