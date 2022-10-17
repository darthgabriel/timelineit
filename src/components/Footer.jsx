import React from 'react';
import { Footer } from 'flowbite-react';

const MyFooter = () => {
	return (
		<Footer container={true}>
			<Footer.Copyright href='#' by='Ing. Jose Paredes' year={2022} />
		</Footer>
	);
};

export default MyFooter;
