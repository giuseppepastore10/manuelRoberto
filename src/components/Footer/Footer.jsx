import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp
} from 'react-icons/fa';
import {
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap
} from './FooterElements';

function Footer() {
	return (
		
			<FooterWrap>
				
					<SocialMediaWrap>
						<SocialLogo to='/'>Manuel Roberto</SocialLogo>
						
						<SocialIcons>
							<SocialIconLink
								href='https://www.facebook.com/manuel.roberto.22'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
								fontSize="2.5rem"
							>
								<FaFacebook />
							</SocialIconLink>
							
							<SocialIconLink
								href='https://www.instagram.com/manuelroberto.calisthenics/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
								fontSize="2.5rem"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='https://api.whatsapp.com/send?phone=3318479926&text=Ciao Manuel, vorrei prenotare una chiamata conoscitiva con te. Quando saresti disponibile?'
								target='_blank'
								aria-label='Whatsapp'
								rel='noopener noreferrer'
								fontSize="2.5rem"
							>
								<FaWhatsapp />
							</SocialIconLink>
							
						</SocialIcons>
						<SocialIcons>
							<SocialIconLink
									href='https://www.facebook.com/manuel.roberto.22'
									target='_blank'
									aria-label='Facebook'
									rel='noopener noreferrer'
									
								>
								Termini e condizioni
								</SocialIconLink>
								<SocialIconLink
									href='https://www.facebook.com/manuel.roberto.22'
									target='_blank'
									aria-label='Facebook'
									rel='noopener noreferrer'
								>
								Privacy policy
								</SocialIconLink>
								<SocialIconLink
									href='https://www.facebook.com/manuel.roberto.22'
									target='_blank'
									aria-label='Facebook'
									rel='noopener noreferrer'
									
								>
								Cookie policy
								</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				
			</FooterWrap>
	);
}

export default Footer;
