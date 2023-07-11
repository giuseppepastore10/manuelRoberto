import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero(props) {
	

	return (
		<HeroContainer>
			
			<HeroContent>
				<HeroItems>
					<HeroH1>Allenati e eleva il tuo corpo</HeroH1>
					<HeroP>Ottieni un fisico forte ed estetico</HeroP>
					<HeroBtn onClick={props.onBook}>Contattami</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
