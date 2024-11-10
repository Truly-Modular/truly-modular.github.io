// components/ModularAddons.js
import React from 'react'

const addons = [
	{
		name: 'Arsenal',
		modrinth: 'https://modrinth.com/mod/truly-modular-arsenal',
		curseforge: 'https://www.curseforge.com/minecraft/mc-mods/truly-modular-arsenal',
		github: 'https://github.com/Truly-Modular/Arsenal',
		imgSrc: 'https://cdn.modrinth.com/data/c4Uf1TKc/images/1d2f04d3cf259621b01c4cded3cbead3823109f6.png'
	},
	{
		name: 'Archery',
		modrinth: 'https://modrinth.com/mod/truly-modular-archery',
		curseforge: 'https://www.curseforge.com/minecraft/mc-mods/truly-modular-archery',
		github: 'https://github.com/Truly-Modular/Archery',
		imgSrc: 'https://cdn.modrinth.com/data/c4Uf1TKc/images/210f89c8351319aa1445277f64f166930afc4bdd.png'
	},
	{
		name: 'Armory',
		modrinth: 'https://modrinth.com/mod/truly-modular-armory',
		curseforge: 'https://www.curseforge.com/minecraft/mc-mods/truly-modular-armory',
		github: 'https://github.com/Truly-Modular/Armory',
		imgSrc: 'https://cdn.modrinth.com/data/c4Uf1TKc/images/677e5a34444926fc2e8220fb5983a794afdb743f.png'
	}
]

export function ModularAddons() {
	return (
		<div>
			<p style={{ padding: '8px', textAlign: 'center', margin: '0px 0', color: 'white' }}>Our Homemade Addons:</p>
			<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '15px 0' }}>
				{addons.map((addon, index) => (
					<div key={index} style={{ textAlign: 'center', backgroundColor: '#1e2124', borderRadius: '10px', width: '250px', color: 'white' }}>
						{/* Addon Name */}
						<p style={{ padding: '8px', margin: '0px 0' }}>{addon.name}</p>

						{/* Image linked to Modrinth */}
						<a href={addon.modrinth} style={{ display: 'block' }}>
							<img src={addon.imgSrc} alt={addon.name} style={{ width: '100%', borderRadius: '10px' }} />
						</a>

						{/* Links to Modrinth, CurseForge, and GitHub */}
						<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
							<a href={addon.modrinth} aria-label="Modrinth" style={{ color: 'white', fontSize: '1.2em' }}>
								<img
									src="https://simpleicons.org/icons/modrinth.svg"
									alt="Modrinth"
									style={{
										width: '24px',
										height: '24px',
										filter: 'invert(55%) sepia(55%) saturate(2680%) hue-rotate(90deg) brightness(89%) contrast(90%)',
										transition: 'filter 0.3s ease'
									}}
								/>
							</a>
							<a href={addon.curseforge} aria-label="CurseForge" style={{ color: 'white', fontSize: '1.2em' }}>
								<img
									src="https://simpleicons.org/icons/curseforge.svg"
									alt="CurseForge"
									style={{
										width: '24px',
										height: '24px',
										filter: 'invert(23%) sepia(56%) saturate(5020%) hue-rotate(6deg) brightness(94%) contrast(94%)',
										transition: 'filter 0.3s ease'
									}}
								/>
							</a>
							<a href={addon.github} aria-label="GitHub" style={{ color: 'white', fontSize: '1.2em' }}>
								<img
									src="https://simpleicons.org/icons/github.svg"
									alt="GitHub"
									style={{
										width: '24px',
										height: '24px',
										filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(0%)', // Gray color
										transition: 'filter 0.3s ease'
									}}
								/>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
