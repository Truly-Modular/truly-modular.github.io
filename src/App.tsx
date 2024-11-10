// App.js
import React from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Description } from './Components/Description'
import { WikiLinks } from './Components/WikiLinks'
import { ModularAddons } from './Components/ModularAddons'
import { FAQ } from './Components/FAQ'

function App() {
	return (
		<div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
			<Header />
			<div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
				<Description />
				<WikiLinks />
				<ModularAddons />
			</div>
		</div>
	)
}

export default App
