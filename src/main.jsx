// eslint-disable-next-line import/no-unresolved
import { ClickToComponent } from 'click-to-react-component'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<ClickToComponent />
	</React.StrictMode>
)
