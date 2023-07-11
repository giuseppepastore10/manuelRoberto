import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SideBarElements';

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink href='#chisono'>Chi sono</SidebarLink>
				<SidebarLink href='#allenamento'>Il mio metodo di allenamento</SidebarLink>
				<SidebarLink href='#successo'>Storie di successo</SidebarLink>
			</SidebarMenu>
			{/* <SideBtnWrap>
				<SidebarRoute to='/'>Order Now</SidebarRoute>
			</SideBtnWrap> */}
		</SidebarContainer>
	);
}

export default Sidebar;
