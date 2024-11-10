// components/FAQ.js
import React from 'react'

const faqItems = [
	{ question: 'What Launcher is this for? Forge? Fabric?', answer: 'Both are supported, check the jars.' },
	{ question: 'Backport to older versions?', answer: 'Not planned due to focus on newer features.' },
	{ question: 'Is X mod supported?', answer: 'Generative compatibility likely supports most mods out of the box. See compatibility list.' },
	{ question: 'Can I write an Addon?', answer: 'Yes, visit our Discord or check the API wiki for help.' },
	{ question: 'Can I use this in a Modpack?', answer: 'Yes, modpack usage is supported.' }
]

export function FAQ() {
	return (
		<div style={{ padding: '20px', borderRadius: '8px', color: 'FFFFFF' }}>
			<h3>FAQ</h3>
			{faqItems.map((item, index) => (
				<div key={index} style={{ marginBottom: '10px', color: 'FFFFFF' }}>
					<b>{item.question}</b>
					<p>{item.answer}</p>
				</div>
			))}
		</div>
	)
}
