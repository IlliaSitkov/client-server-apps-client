import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GroupList } from './components/GroupList/GroupList';
import { Provider } from 'react-redux';
import { store } from './store';
import { LOCAL_STORAGE_TOKEN } from './shared/constants';

function App() {
	const token =
		'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaXNzIjoidWEuY29tLmNsaWVudC1zZXJ2ZXItYXBwIiwiaWF0IjoxNjU3NzAwMTUzLCJleHAiOjE2NTc3MDA0NTN9.Tkes1k1DaDZeqZPNxgn5RvMF647GVdviKARPr-3M6WA';

	localStorage.setItem(LOCAL_STORAGE_TOKEN, token); // temporary solution

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
