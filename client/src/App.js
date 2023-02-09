import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "./pages/index";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="container">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
