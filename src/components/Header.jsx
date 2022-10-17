import React from 'react';
import { Navbar } from 'flowbite-react';
import HyundaiLogo from '../assets/img/hyundailogo.png';
import KiaLogo from '../assets/img/kialogo.png';
import MitsubishiLogo from '../assets/img/mitsubishilogo.png';
import FusoLogo from '../assets/img/fusologo.png';
import JetourLogo from '../assets/img/jetourlogo.png';
import KarryLogo from '../assets/img/karrylogo.png';

export default function Header() {
	return (
		<nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-lg sticky z-50 top-0'>
			<div class='container flex flex-wrap justify-between items-center mx-auto'>
				<a href='#' class='flex items-center'>
					<img src={HyundaiLogo} className='mr-3 h-6 sm:h-10' />
					<img src={KiaLogo} className='mr-3 h-6 sm:h-10' />
					<img src={MitsubishiLogo} className='mr-3 h-6 sm:h-10' />
					<img src={FusoLogo} className='mr-3 h-6 sm:h-10' />
					<img src={JetourLogo} className='mr-3 h-6 sm:h-10' />
					<img src={KarryLogo} className='mr-3 h-6 sm:h-10' />
				</a>
				<div>IT & MD</div>
			</div>
		</nav>
	);
}
