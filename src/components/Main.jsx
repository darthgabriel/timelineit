import React from 'react';
import { Avatar, Tooltip, Timeline, Button } from 'flowbite-react';
import organizacion from '../variables/Organizacion';
import timeline from '../variables/Timeline';


const Main = () => {
	return (
		<div className='text-white my-5 flex flex-col place-items-center'>
			<div className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl self-end hover:animate-pulse mr-10'>Dpto IT & Marketing Digital</div>
			<div className='text-2xl'></div>
			<div className='flex flex-wrap mt-5 gap-20 justify-center'>
				{organizacion.map((e, i) => (
					<PerfilesCargo cargo={e.cargo} funciones={e.funciones} key={i} />
				))}
			</div>
			<div className='text-2xl my-5 self-start mx-36'>Timeline</div>
			<MyTimeLine timeline={timeline} />
		</div>
	);
};

const PerfilesCargo = ({ cargo, funciones }) => (
	<div className='z-10'>
	<Tooltip content={<FuncionesCargo funciones={funciones} />} placement='bottom' style='light'>
		<div className='flex flex-col place-items-center hover:-translate-y-6'>
			<Avatar size={'xl'} />
			<div className='my-2'>{cargo}</div>
		</div>
	</Tooltip>
	</div>
);

const FuncionesCargo = ({ funciones }) => (
	<ul class='space-y-1 max-w-md list-disc list-inside text-gray-500'>
		{funciones.map((e, i) => (
			<li key={i}>{e}</li>
		))}
	</ul>
);

const MyTimeLine = ({ timeline = [] }) => (
	<ol class='relative border-l border-gray-200 w-fit ml-4'>
		{timeline.map((e, i) => (
			<li class='mb-10 ml-4' key={i}>
				<div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white '></div>
				<h3 class='text-lg font-semibold text-white'>{e.title}</h3>

				<p class='mb-4 text-base font-normal text-gray-500 flex justify-between'>
					<ul class='space-y-1 list-disc list-inside text-gray-500'>
						{e.contenido.map((e, i) => (
							<li key={i} className='hover:translate-x-10 hover:text-gray-100'>{e}</li>
						))}
					</ul>
				<div className='pl-10'>
					{e.img ? <img src={e.img} width={300} className='rounded-sm shadow-md hover:shadow-lg hover:shadow-slate-100 shadow-gray-100 opacity-50 hover:opacity-100' /> : null }
				</div>
				</p>
			</li>
		))}
	</ol>
);

export default Main;
