import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background: black;
		color: white;
	}

	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
`;