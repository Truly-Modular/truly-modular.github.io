// components/Description.js
import React from 'react'

export function Description() {
	return (
		<div style={{ padding: '5px', borderRadius: '8px' }}>
			<div style={{ textAlign: 'center', margin: '20px 0' }}>
				<iframe
					width="600"
					height="400"
					src="https://www.youtube-nocookie.com/embed/yj_xla06cfg"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={{ borderRadius: '8px' }}
				></iframe>
			</div>
		</div>
	)
}
