import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GroupList } from './components/GroupList/GroupList';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Header />
					<Routes>
						<Route path='/products' exact element={<ProductList />} />
						<Route path='/groups' exact element={<GroupList />} />
						<Route path='*' element={<Navigate to='/products' />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
