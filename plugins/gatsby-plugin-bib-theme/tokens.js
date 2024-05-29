export default {
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536
		}
	},
	cssVarPrefix: 'bib',
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: '#0057AC'
				},
				udemBleuFonce: {
					main: '#0B113A',
					light: 'rgb(59, 64, 97)',
					dark: 'rgb(7, 11, 40)',
					contrastText: '#fff'
				},
				udemBleuPrincipal: {
					main: "#0057ac",
					light: "rgb(51, 120, 188)",
					dark: "rgb(0, 60, 120)",
					contrastText: "#fff"
				}
			}
		}
	},
	typography: {
		fontFamily: 'Figtree',
		// h1: {
		// 	fontFamily: mySerif
		// },
		// h2: {
		// 	fontFamily: mySerif
		// },
		// h3: {
		// 	fontFamily: mySerif
		// },
		// h4: {
		// 	fontFamily: mySerif
		// },
		// body1: {
		// 	fontFamily: mySans
		// }
	},
	shape: {
		corner: {
			'extra-large': '28px',
			'extra-small': '4px',
			full: '9999px',
			large: '16px',
			medium: '12px',
			none: '0',
			small: '8px'
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: (theme) => `
				:root {
					--bib-comp-retroaction-usager-size: ${theme.typography.body2.fontSize};
				}
				${theme.breakpoints.down('md')} {
					:root {
						font-size: 19px;
					}
				}
			`
		},
		MuiLink: {
			defaultProps: {
				underline: 'hover',
			},
		},
		MuiStack: {
			defaultProps: {
				useFlexGap: true,
			},
		},
		BibFooter: {
			styleOverrides: {
				udem: ({ theme }) => ({
				})
			}
		}
	},
}