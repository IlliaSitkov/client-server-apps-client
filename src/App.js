import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GroupList } from './components/GroupList/GroupList';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Provider } from 'react-redux';
import { store } from './store';
import { useState } from 'react';
import { LOCAL_STORAGE_TOKEN } from './shared/constants';
import { Statistics } from './components/Statistics/Statistics';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem(LOCAL_STORAGE_TOKEN) !== null
	);

	const logOut = () => {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN);
		setIsLoggedIn(false);
	};

	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					{isLoggedIn && <Header logOut={logOut} />}
					<Routes>
						{!isLoggedIn && (
							<>
								<Route
									path='/login'
									element={<LoginForm loggedInSetter={setIsLoggedIn} />}
								/>
								<Route path='*' element={<Navigate to='/login' />} />
							</>
						)}
						{isLoggedIn && (
							<>
								<Route path='/products' exact element={<ProductList />} />
								<Route path='/groups' exact element={<GroupList />} />
								<Route path='/statistics' exact element={<Statistics />} />
								<Route path='*' element={<Navigate to='/products' />} />
							</>
						)}
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
