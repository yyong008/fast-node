import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// styles
import "./index.css";

const MainApp = () => {
	return <BrowserRouter>
		<App />
	</BrowserRouter>
}

ReactDOM.render(<MainApp />, document.body);
