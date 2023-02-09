import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard, Login, Register } from "./pages/index";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
