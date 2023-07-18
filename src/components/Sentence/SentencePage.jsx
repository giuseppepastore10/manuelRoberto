import React from 'react';
import { Container, ContentContainer, FeatureContainer } from './SentencePageElements';

function SentencePage(props) {
	return (
		<FeatureContainer noWholeWindow={props.noWholeWindow} id={props.id}>
		
			{props.children}

			
		</FeatureContainer>
	);
}

export default SentencePage;
