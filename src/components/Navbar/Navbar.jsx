import React from 'react';
import { Nav, NavContentWrap, NavIcon, NavLink, NavWrap } from './NavbarElements';

function NavBar({ toggle }) {


	return (
		<>
			<Nav>
				
					<NavContentWrap>
						<NavLink to='/'>Manuel Roberto</NavLink>
						
						<NavIcon onClick={toggle}>
							<p>Menu</p>
						</NavIcon>
					</NavContentWrap>
				
			</Nav>
		</>
	);
}

export default NavBar;
