import React from 'react';
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductsCard,
	ProductsImg,
	ProductsInfo,
	ProductsTitle,
	ProductsDesc,
	ProductsPrice,
	ProductsButton,
} from './ProductsElements';
import { Container, ContentContainer, ImageContainer } from '../Feature/PhotoPageElements';

function Products({ heading, data,left,imgs }) {
	return (
		<ProductsContainer>
			
			
			
			
			
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<div style={{display:'flex',flexDirection:'column'}}>
						<ProductsCard key={index}>
							<div style={{display:'flex',with:"100%", justifyContent:'center',alignItems:'center'}}>
								{product.icon}
							</div>
							
						</ProductsCard>
						<br/>
						<br/>
						<ProductsCard key={index}>
							
							<ProductsInfo fontSize="clamp(1rem, 2.5vw, 1.2rem)" textAlign="center">
								{product.title}
								
								
								
							</ProductsInfo>
						</ProductsCard>
						<ProductsCard key={index}>
							
							<ProductsInfo fontSize="clamp(1rem, 2.5vw, 1.2rem)" textAlign="center">
								
								
								<span style={{fontSize:"clamp(1rem, 2.5vw, 1rem)"}}>{product.desc}</span>
								
								
							</ProductsInfo>
						</ProductsCard>
						
						</div>
					);
				})}
			</ProductsWrapper>
		</ProductsContainer>
	);
}

export default Products;
