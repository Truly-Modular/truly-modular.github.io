// components/WikiLinks.js
import React from 'react'

const wikiLinks = [
	{ buttonText: 'Wiki 1.20', link: 'https://github.com/Truly-Modular/Modular-Item-API/wiki' },
	{ buttonText: 'Wiki 1.21+', link: 'https://truly-modular.github.io/Modular-Item-API/?branch=release/1.21-mojmaps&page=home' },
	{ buttonText: 'Material Helper', link: 'https://truly-modular.github.io/Material-Helper/' }
]

export function WikiLinks() {
	return (
		<div>
			<p style={{ padding: '8px', textAlign: 'center', margin: '0px 0', color: 'white' }}>Usefull links:</p>
			<div style={{ padding: '10px 0', display: 'flex', gap: '5px', justifyContent: 'center' }}>
				{wikiLinks.map((link, index) => (
					<a
						key={index}
						href={link.link}
						style={{
							padding: '8px 15px',
							backgroundColor: '#007acc',
							color: '#fff',
							borderRadius: '5px',
							textDecoration: 'none'
						}}
					>
						{link.buttonText}
					</a>
				))}
			</div>
		</div>
	)
}
