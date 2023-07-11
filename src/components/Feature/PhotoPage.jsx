import React from 'react';
import { ContentContainer, FeatureContainer, ImageContainer } from './PhotoPageElements';

function PhotoPage(props) {
	return (
		<FeatureContainer id={props.id}>
		
			
				
				{props.img && props.left && (
					<ContentContainer>
						<ImageContainer>
							<img src={props.img} />
						</ImageContainer>
					</ContentContainer>
				)}
					<ContentContainer>
						{props.children}
					</ContentContainer>
				{!props.left && props.img &&  (
					<ContentContainer>
						<ImageContainer>
							<img src={props.img} />
						</ImageContainer>
					</ContentContainer>
				)}
			
		</FeatureContainer>
	);
}

export default PhotoPage;
