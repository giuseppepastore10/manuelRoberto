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
			
			
				<HeroItems>
					<HeroH1>ALLENATI!  &nbsp;</HeroH1>
					<HeroP><span style={{color: "white"}}>Ottieni un fisico forte ed estetico tramite il Calisthenics.</span></HeroP>
					<HeroBtn onClick={props.onBook}>CONTATTAMI</HeroBtn>
				</HeroItems>
			
		</HeroContainer>
	);
}

export default Hero;
