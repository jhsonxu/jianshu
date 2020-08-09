import {createGlobalStyle} from 'styled-components'
export const GlobalStyled = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
	display: block;
	}
	body {
	line-height: 1;
	}
	ol, ul {
	list-style: none;
	}
	a{
	text-decoration :none;
	}
	blockquote, q {
	quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
	content: '';
	content: none;
	}
	table {
	border-collapse: collapse;
	border-spacing: 0;
	}
	@font-face {font-family: "iconfont";
	  src: url('./iconfont.eot?t=1595583648604'); /* IE9 */
	  src: url('./iconfont.eot?t=1595583648604#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARMAAsAAAAACKgAAAP/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEQIQGATYCJAMUCwwABCAFhG0HThuYB8gOJaDAwAB4oEhgPt9v5t8ZYEuHulAzsuJKKhYZsmyEHELF9Zn4V8WTJ+7hwe/2d9srPqEiiCA6igokwBAyTjq4pi5KMM/e5hJZ1k0bBeAogQYU0VZEAbIB4pw3jF1cxn4gAGac2chW3dgJmUgbRgDkMAMeyDENsSSZkBEpOXML5IFEbrvoWQAH3PeTH+khA5SU0Ma2jio/Sr8hX7YJG5MbLbRR4PZnAsAsAgTAbIAI5My1hAi+bzYBk74nKgUwMop+Qz7P/kL+si2ZRBasSMb0PzyAEogIkAmapA/Cl4rFneOaCFD4PBsBAb6QERDhyzbeuUgkJGMocB9AZogfcxeKEtE+cFgfWR6qaL1XdL5wDVevdpLOLpJIuDfFdT0atfFam/vFOJ+JVeOlBInH9ZyO16517UmU8GN77tu0OpuFWRlXicf7M71PJwsq8+YfH8euHzHX85yyB2DBXma7z5NNbvcmd3Jh1+N3Y+M9yp7XCAl26U83mqhC9PNt7559/bWhne5jiYKbXI7qsQzIwqTXSi68kig5/mH37jtHv/PL8viP/7zz5r3nipXRHY8/voOWbtCeKn1B/PffemFBxS3/bI6VJmuNRcHeq1+/RdOtEnrktdeOpM60Wda6h197/Ugric641q/fqVEZo7I++j23PvTQViAUoJlupSHLYcJfhpeNmkvTKy/xfklvRbynuKWLlnvN4oT4T3HMeSPXRaQyzZqhm30XKQ2l+Z8udjtnRg79Z9SUn6aMw3e39PnTm76TRm7LCy/2jz1S5CxfN+mxmp0PHdYaH5o3e97Sioef70v+kFbhgOvYKzvirpyXv11Frs8sb5qP1euSxd4yU5jy0SeD2oWz3iFbDo9Lexu5ACD5Sr4slLnoJBroC7LcP+Iz+CBRWLukf+FvsiICAN4pPXczzEluLAg38FqlqM19/9yaRaLM17RSifkmR7RKciIaUKmKAd66Y5D3+7ENhdBEyCwXAtXLWBDIJqNF/GyQKDIhhawEmFlqFisGswlI9QYw0zYAxAAPAdXPSyAY4BxaxL8HkmG+gxQDQgBGj8FrKqaGySps7nG4X/WuUk2fFTEMvcO85HYeWBby2FG+S9a5HTOdapqWmgzW8Ai3+5gQWx5IdxxDNWwrrFaDw3goZKlR2+rhPkfrdpxovstl5D1I81lhMBVsnIeD81N5raIy+VgiDLuyg6Ve344LWCbEwy4pKDHqOFuM2boqjSa1BrpGEqlVcC6dY5YLSOdwGHiQwWYJU1VDExfSfRZVNL9XD87Hoelu4YnK50LljLoSbXxZ+Bo3ATDaGVJQIhCRSCQF4hU1I8zwRAJ+T49pT6dlHqWVR2KrloU9ltcEAAA=') format('woff2'),
	  url('./iconfont.woff?t=1595583648604') format('woff'),
	  url('./iconfont.ttf?t=1595583648604') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('./iconfont.svg?t=1595583648604#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	`;
//reset.css 不同的浏览器对不同样式的设置不同，reset.css可以让所有标签的表现一致