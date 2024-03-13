import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import Root from './pages/root/root';

import './index.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
