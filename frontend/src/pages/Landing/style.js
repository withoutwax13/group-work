import { device } from '../../utils/responsiveBreakpoints'

export const defaultStyle = () => `
	width: 100vw; 
	height: calc(100vh - 100px);
	text-align: center;
`

export const heroSectionContainerStyle = () => `
	${device.DesktopHD}{
		position: absolute;
		top: 20%;
		left: 10%;
		height: auto;
		width: 64vw;
	}
	${device.Desktop}{
		position: absolute;
		top: 20%;
		left: 10%;
		height: auto;
		width: 64vw;
	}
	${device.TabletHD}{
		position: absolute;
		top: 20%;
		left: 10%;
		height: auto;
		width: 64vw;
	}${device.Tablet}{
		position: absolute;
		top: 20%;
		left: 10%;
		height: auto;
		width: 64vw;
	}${device.MobileLandscape}{
		position: absolute;
		top: 20%;
		left: 10%;
		height: auto;
		width: 64vw;
	}${device.MobilePortrait}{
		position: absolute;
		top: 20%;
		left: 10%;
		height: auto;
		width: 64vw;
	}
	padding: 0;
	text-align: left;
`

export const mainHeadingStyle = () => `
	${device.DesktopHD}{
		font-weight: bolder;
		font-size: 8vw;
	}
	${device.Desktop}{
		font-weight: bolder;
		font-size: 8vw;	
	}
	${device.TabletHD}{
		font-weight: bolder;
		font-size: 8vw;	
	}${device.Tablet}{
		font-weight: bolder;
		font-size: 8vw;
	}${device.MobileLandscape}{
		font-weight: bolder;
		font-size: 8vw;
	}${device.MobilePortrait}{
		font-weight: bolder;
		font-size: 8vw;
	}
	color: black;
	font-family: Helvetica;
	margin: 0;
	padding: 0;
`

export const subHeadingStyle = () => `
	${device.DesktopHD}{
		font-size: 2.5vw;
	}
	${device.Desktop}{
		font-size: 2.5vw;	
	}
	${device.TabletHD}{
		font-size: 2.5vw;	
	}${device.Tablet}{
		font-size: 2.5vw;
	}${device.MobileLandscape}{
		font-size: 2.5vw;
	}${device.MobilePortrait}{
		font-size: 2.5vw;
	}
	color: gray;
	font-family: Courier New;
	margin: 0;
	padding: 0;
`

export const authButtonStyle = () => `
	background-color: black;
	color: white;
	font-family: Courier New;
	font-size: 2vw;
	text-align: center;
	padding: 1% 5%;
	height: auto;
`