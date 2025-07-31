export default function ColorPaletteShowcase() {
	return (
		<div id="ColorPaletteShowcase">
			<div id="BaseColors" className="container">
                <div className="header"><h2>Base Colors</h2></div>

				<div className="colors">
					<div id="Base" className="box text">Base</div>
					<div id="BaseDim" className="box text">Dim</div>
				</div>

				<div className="colors">
					<div id="Primary" className="box text">Primary</div>
					<div id="Secondary" className="box text">Secondary</div>
					<div id="Contrast" className="box text">Contrast</div>
				</div>
				
				<div className="colors">
					<div id="PrimaryMuted" className="box text">Primary Muted</div>
					<div id="SecondaryMuted" className="box text">Secondary Muted</div>
					<div id="ContrastMuted" className="box text">Contrast Muted</div>
				</div>

				<div className="colors">
					<div id="NeutralBlack" className="box text">Neutral Black</div>
					<div id="NeutralDark" className="box text">Neutral Dark</div>
					<div id="NeutralLight" className="box text">Neutral Light</div>
					<div id="NeutralWhite" className="box text">Neutral White</div>
				</div>
			</div>

			<div id="Accents" className="container">
                <div className="header"><h2>Accent Colors</h2></div>

				<div id="AccentsPrimary" className="container">
					<div className="colors">
						<div id="AccentBrighter" className="box text">Brighter</div>
						<div id="AccentBright" className="box text">Bright</div>
						<div id="Accent" className="box text">Accent</div>
						<div id="AccentDim" className="box text">Dim</div>
						<div id="AccentDimmer" className="box text">Dimmer</div>
					</div>
					<div className="colors">
						<div id="AccentMutedBrighter" className="box text">Muted Brighter</div>
						<div id="AccentMutedBright" className="box text">Muted Bright</div>
						<div id="AccentMuted" className="box text">Muted</div>
						<div id="AccentMutedDim" className="box text">Muted Dim</div>
						<div id="AccentMutedDimmer" className="box text">Muted Dimmer</div>
					</div>
				</div>

				<div id="AccentsSecondary" className="container">
					<div className="colors">
						<div id="AccentSecondaryBrighter" className="box text">
							Secondary Brighter
						</div>
						<div id="AccentSecondaryBright" className="box text">
							Secondary Bright
						</div>
						<div id="AccentSecondary" className="box text">
							Secondary
						</div>
						<div id="AccentSecondaryDim" className="box text">
							Secondary Dim
						</div>
						<div id="AccentSecondaryDimmer" className="box text">
							Secondary Dimmer
						</div>
					</div>
					<div className="colors">
						<div id="AccentMutedSecondaryBrighter"
							className="box text">
							Muted Brighter
						</div>
						<div id="AccentMutedSecondaryBright" className="box text">
							Muted Bright
						</div>
						<div id="AccentMutedSecondary" className="box text">
							Muted
						</div>
						<div id="AccentMutedSecondaryDim" className="box text">
							Muted Dim
						</div>
						<div id="AccentMutedSecondaryDimmer" className="box text">
							Muted Dimmer
						</div>
					</div>
				</div>
			</div>

            <div id="Legacies" className="container">
                <div className="header"><h2>Legacy Colors</h2></div>
                
                <div className="colors">
                    <div id="LegacyBrighter" className="box text">Brighter</div>
                    <div id="LegacyBright" className="box text">Bright</div>
                    <div id="Legacy" className="box text">Legacy</div>
                    <div id="LegacyDim" className="box text">Dim</div>
                    <div id="LegacyDimmer" className="box text">Dimmer</div>
                </div>
            </div>

			<div id="Text" className="container">
                <div className="header"><h2>Text Colors</h2></div>

				<div className="colors">
					<h1 id="H1" className="box text">
						Header 1
					</h1>
					<h2 id="H2" className="box text">
						Header 2
					</h2>
					<h3 id="H3" className="box text">
						Header 3
					</h3>
					<h4 id="H4" className="box text">
						Header 4-6
					</h4>
				</div>
				<div className="colors">
					<p id="text" className="box text">
						Text
					</p>
					<p id="highlighted" className="box text">
						Highlighted
					</p>
					<p id="special" className="box text">
						Special
					</p>
					<p id="link" className="box text">
						Link
					</p>
					<p id="linkHighlighted" className="box text">
						Link Highlighted
					</p>
				</div>
			</div>

			<div id="ShadowGlow" className="container">
                <div className="header"><h2>Shadows and Glows</h2></div>

				<div className="colors">
					<div id="ShadowHeavy" className="box text">Heavy</div>
					<div id="Shadow" className="box text">Default</div>
					<div id="ShadowLight" className="box text">Light</div>
				</div>

				<div className="colors">
					<div id="GlowBright" className="box text">Bright</div>
					<div id="Glow" className="box text">Default</div>
					<div id="GlowDim" className="box text">Dim</div>
				</div>
			</div>

			<div id="Neons" className="container">
                <div className="header"><h2>Neon Colors</h2></div>

				<div className="colors">
					<div id="HighlightRed" className="box" />
					<div id="HighlightOrange" className="box" />
					<div id="HighlightYellow" className="box" />
					<div id="HighlightLime" className="box" />
					<div id="HighlightGreen" className="box" />
					<div id="HighlightTeal" className="box" />
					<div id="HighlightCyan" className="box" />
					<div id="HighlightBlue" className="box" />
					<div id="HighlightIndigo" className="box" />
					<div id="HighlightPurple" className="box" />
					<div id="HighlightViolet" className="box" />
					<div id="HighlightMagenta" className="box" />
				</div>

				<div className="colors">
					<div id="Red" className="box" />
					<div id="Orange" className="box" />
					<div id="Yellow" className="box" />
					<div id="Lime" className="box" />
					<div id="Green" className="box" />
					<div id="Teal" className="box" />
					<div id="Cyan" className="box" />
					<div id="Blue" className="box" />
					<div id="Indigo" className="box" />
					<div id="Purple" className="box" />
					<div id="Violet" className="box" />
					<div id="Magenta" className="box" />
				</div>

				<div className="colors">
					<div id="DimRed" className="box" />
					<div id="DimOrange" className="box" />
					<div id="DimYellow" className="box" />
					<div id="DimLime" className="box" />
					<div id="DimGreen" className="box" />
					<div id="DimTeal" className="box" />
					<div id="DimCyan" className="box" />
					<div id="DimBlue" className="box" />
					<div id="DimIndigo" className="box" />
					<div id="DimPurple" className="box" />
					<div id="DimViolet" className="box" />
					<div id="DimMagenta" className="box" />
				</div>

				<div className="colors">
					<div id="MutedRed" className="box" />
					<div id="MutedOrange" className="box" />
					<div id="MutedYellow" className="box" />
					<div id="MutedLime" className="box" />
					<div id="MutedGreen" className="box" />
					<div id="MutedTeal" className="box" />
					<div id="MutedCyan" className="box" />
					<div id="MutedBlue" className="box" />
					<div id="MutedIndigo" className="box" />
					<div id="MutedPurple" className="box" />
					<div id="MutedViolet" className="box" />
					<div id="MutedMagenta" className="box" />
				</div>
			</div>
		</div>
	);
}

import "./ColorPalette.css";