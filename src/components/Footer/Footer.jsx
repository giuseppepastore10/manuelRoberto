import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
	FaWhatsapp,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>Manuel Roberto</SocialLogo>
						
						<SocialIcons>
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
							
						</SocialIcons>
						
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
