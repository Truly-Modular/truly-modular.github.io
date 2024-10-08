export const Header = () => {
	return (
		<div className="Top-banner">
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "white",
						fontWeight: "bold",
					}}
				>
					<img src={process.env.PUBLIC_URL + "/logo_trans.png"} width={40} height={40} />
					<span>Truly Modular</span>
				</div>
			</div>

			<div style={{ display: "flex", alignItems: "center" }}>
				<a href="https://discord.gg/TebNhbCAUP" style={{ margin: "0 0.5rem" }}>
					<img
						src="https://simpleicons.org/icons/discord.svg"
						alt="Discord"
						style={{
							width: "24px",
							height: "24px",
							filter:
								"invert(36%) sepia(84%) saturate(2682%) hue-rotate(180deg) brightness(89%) contrast(90%)",
							transition: "filter 0.3s ease",
						}}
						className="icon"
					/>
				</a>
				<a href="https://github.com/Truly-Modular/Modular-Item-API" style={{ margin: "0 0.5rem" }}>
					<img
						src="https://simpleicons.org/icons/github.svg"
						alt="GitHub"
						style={{
							width: "24px",
							height: "24px",
							filter:
								"invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(0%)", // Gray color
							transition: "filter 0.3s ease",
						}}
						className="icon"
					/>
				</a>
				<a href="https://modrinth.com/organization/truly-modular" style={{ margin: "0 0.5rem" }}>
					<img
						src="https://simpleicons.org/icons/modrinth.svg"
						alt="Modrinth"
						style={{
							width: "24px",
							height: "24px",
							filter:
								"invert(55%) sepia(55%) saturate(2680%) hue-rotate(90deg) brightness(89%) contrast(90%)",
							transition: "filter 0.3s ease",
						}}
						className="icon"
					/>
				</a>
				<a
					href="https://www.curseforge.com/minecraft/mc-mods/modular-item-api"
					style={{ margin: "0 0.5rem" }}
				>
					<img
						src="https://simpleicons.org/icons/curseforge.svg"
						alt="CurseForge"
						style={{
							width: "24px",
							height: "24px",
							filter:
								"invert(23%) sepia(56%) saturate(5020%) hue-rotate(6deg) brightness(94%) contrast(94%)",
							transition: "filter 0.3s ease",
						}}
						className="icon"
					/>
				</a>
			</div>
		</div>
	)
}
