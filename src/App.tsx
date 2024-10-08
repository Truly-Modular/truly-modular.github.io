import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Header } from "./Components/Header"

function App() {
	const wikiLinks = [
		{
			buttonText: "Wiki 1.21+",
			link: "https://truly-modular.github.io/Modular-Item-API/?branch=release/1.21-mojmaps&page=home",
		},
		{
			buttonText: "Wiki 1.20",
			link: "https://github.com/Truly-Modular/Modular-Item-API/wiki",
		},
	]

	return (
		<div>
			<Header />
			<div
				style={{
					padding: "10px",
				}}
			>
				<h2>General</h2>
				<a href="https://truly-modular.github.io/Material-Helper/">Material Helper</a>
				<h2>Wikis</h2>
				{wikiLinks.map((link) => {
					return (
						<div>
							<a href={link.link}>{link.buttonText}</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default App
