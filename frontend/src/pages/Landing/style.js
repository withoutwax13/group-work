import { device } from '../../utils/responsiveBreakpoints'

export const defaultStyle = () => `
	width: 100%; 
	height: 1440px;
	text-align: center;
`

export const heroSectionStyle = () => `
	margin-top: 10%;
	margin-bottom: 20%;
	display: flex; flex-direction: column; align-items: space-between;
`
export const mainHeadingStyle = () => `
	${device.MobilePortrait}{
		color: black; font-family: Helvetica; font-size: 4.0rem;
	}
	${device.MobileLandscape}{
		color: black; font-family: Helvetica; font-size: 4.0rem;
	}
	color: black; font-family: Helvetica; font-size: 5.0rem;
`

export const subHeadingStyle = () => `
	${device.MobilePortrait}{
		color: gray; font-damily: Courier New; font-size: 1.3rem;
		margin: auto 5% 3% 5%;
	}
	${device.MobileLandscape}{
		color: gray; font-damily: Courier New; font-size: 1.3rem;
		margin: auto 5% 3% 5%;
	}
	color: gray; font-damily: Courier New; font-size: 1.3rem; margin-top: 1%;
`

export const featureSectionStyle = () => `
	${device.MobilePortrait}{
		display: flex;
		flex-direction: column;
		height: 800px;
		width: 100%;
	}
	${device.MobileLandscape}{
		display: flex;
		flex-direction: column;
		height: 800px;
		width: 100%;
	}
	${device.Tablet}{
		display: flex;
		flex-direction: column;
		height: 800px;
		width: 100%;
	}
	${device.TabletHD}{
		display: flex;
		flex-direction: column;
		height: 800px;
		width: 100%;
	}
	height: 400px;
	width: 100%;
	display: flex;
	flex-direction: row;
`

export const featureContainerStyle = () => `
	${device.MobilePortrait}{
		width: 80%;
		height: 31%;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		margin: auto;
	}
	${device.MobileLandscape}{
		width: 80%;
		height: 31%;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		margin: auto;
	}
	${device.Tablet}{
		width: 80%;
		height: 31%;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		margin: 0 auto;
	}
	${device.TabletHD}{
		width: 60%;
		height: 30%;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		margin: 5px auto;
	}
	${device.Desktop}{
		height: 100%;
		width: 30%;
		border-left: 1px solid silver;
		border-right: 1px solid silver;
		margin: 0 auto;
	}
	${device.DesktopHD}{
		height: 100%;
		width: 30%;
		border-left: 1px solid silver;
		border-right: 1px solid silver;
		margin: 0 auto;
	}
`

export const featureLogoStyle = () => `
	${device.MobilePortrait}{
		height: 60%; width: 60%; margin: auto;
	}
	${device.MobileLandscape}{
		height: 60%; width: 60%; margin: auto;
	}
	${device.Tablet}{
		height: 60%; width: 60%; margin: auto;
	}
	${device.TabletHD}{
		height: 60%; width: 60%; margin: auto;
	}
	height: 60%; width: 80%; margin: auto;
`