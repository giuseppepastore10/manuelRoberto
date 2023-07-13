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
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink onClick={toggle} href='#chisono'>Chi sono</SidebarLink>
				<SidebarLink onClick={toggle} href='#coaching'>Allenati con me</SidebarLink>
				<SidebarLink onClick={toggle} href='#successo'>Storie di successo</SidebarLink>
				<SidebarLink onClick={toggle} href='#diconoDiMe'>Dicono di me</SidebarLink>
				<div style={{width:"100%", display:'flex',marginTop: "2rem",justifyContent:'center', alignItems:'center'}}>
				
							<SocialIconLink
								href='https://www.facebook.com/manuel.roberto.22'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
							>
								<FaFacebook />
							</SocialIconLink>
							
							<SocialIconLink
								href='https://www.instagram.com/manuelroberto.calisthenics/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='https://api.whatsapp.com/send?phone=3318479926&text=Ciao Manuel"'
								target='_blank'
								aria-label='Whatsapp'
								rel='noopener noreferrer'
							>
								<FaWhatsapp />
							</SocialIconLink>
							
				
						</div>
			</SidebarMenu>
			{/* <SideBtnWrap>
				<SidebarRoute to='/'>Order Now</SidebarRoute>
			</SideBtnWrap> */}
		</SidebarContainer>
	);
}

export default Sidebar;
