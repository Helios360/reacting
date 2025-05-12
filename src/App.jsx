import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Routes, Route} from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout";

function App() {
  return (
	<Routes>
		<Route path="/" element={<Layout />}>
	  		<Route index element={<Home />} />
		</Route>
	</Routes>
  )
}

export default App
