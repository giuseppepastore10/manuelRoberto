import React from 'react';
import {
	ProductIcon,
	ProductIconContainer,
	ProductsCard,
	ProductsContainer,
	ProductsInfo,
	ProductsWrapper
} from './ProductsElements';
import { HeroP } from '../Hero/HeroElements';

function Products({ heading, data,left,imgs }) {
	return (
			
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<div style={{display:'flex',flexDirection:'column', alignItems:'center', }}>
						<ProductsCard key={index}>
							<ProductIconContainer>
								<ProductIcon>{product.icon}</ProductIcon>
							</ProductIconContainer>
							
						</ProductsCard>
						
						<ProductsCard  key={index}>
							
							<HeroP textAlign="center">
								<span style={{color: "white"}}>{product.title}</span>
								
								
								
							</HeroP>
							<div style={{width:"100%", marginTop:"1rem", marginBottom:"1rem", border: "1px solid white"}}></div>
						</ProductsCard>
						<ProductsCard zeroMargin key={index}>
							
							<HeroP  textAlign="center">
								
								
								{product.desc}
								
								
							</HeroP>
						</ProductsCard>
						
						</div>
					);
				})}
			</ProductsWrapper>
	);
}

export default Products;
