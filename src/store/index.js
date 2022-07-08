import { applyMiddleware, combineReducers, createStore } from 'redux';
import { productsReducer } from './products/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	filter: filterReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
