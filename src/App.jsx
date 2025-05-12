import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Routes, Route} from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout";
import Category from "./pages/Category.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
  				<Route index element={<Home />} />
				<Route path="category/:categoryId" element={<Category />} />
			</Route>
		</Routes>
  	);
}

export default App
