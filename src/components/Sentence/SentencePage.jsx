import React from 'react';
import { Container, ContentContainer, FeatureContainer } from './SentencePageElements';

function SentencePage(props) {
	return (
		<FeatureContainer noWholeWindow={props.noWholeWindow} id={props.id}>
		
			<ContentContainer>{props.children}</ContentContainer>

			
		</FeatureContainer>
	);
}

export default SentencePage;
