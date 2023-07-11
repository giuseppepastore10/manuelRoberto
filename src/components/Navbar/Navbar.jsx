import React from 'react';
import { Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar({ toggle }) {


	return (
		<>
			<Nav>
				<NavLink to='/'>Manuel Roberto</NavLink>
				{/* <div style={{width:"50%",border: "1px solid red", display:'flex',justifyContent:'space-between'}}>
					<NavLink fontSize={"1.5rem"} to='/'>Chi sono</NavLink>
					<NavLink fontSize={"1.5rem"} to='/'>Allenati con me</NavLink>
					<NavLink fontSize={"1.5rem"} to='/'>Storie di successo</NavLink>
					<NavLink fontSize={"1.5rem"} to='/'>Dicono di me</NavLink>
				</div> */}
				<NavIcon onClick={toggle}>
					<p>Menu</p>
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
