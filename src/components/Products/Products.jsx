import React from 'react';
import {
	ProductsCard,
	ProductsContainer,
	ProductsInfo,
	ProductsWrapper
} from './ProductsElements';

function Products({ heading, data,left,imgs }) {
	return (
		<ProductsContainer>
			
			
			
			
			
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<div style={{display:'flex',flexDirection:'column', alignItems:'center', }}>
						<ProductsCard key={index}>
							<div style={{display:'flex',width:"100%", padding: "3rem", justifyContent:'center',alignItems:'center'}}>
								{product.icon}
							</div>
							
						</ProductsCard>
						
						<ProductsCard  key={index}>
							
							<ProductsInfo zeroMargin fontSize="clamp(1.5rem, 2.5vw, 1.5rem)" textAlign="center">
								{product.title}
								
								
								
							</ProductsInfo>
							<div style={{width:"100%", marginTop:"1rem", marginBottom:"1rem", border: "1px solid white"}}></div>
						</ProductsCard>
						<ProductsCard zeroMargin key={index}>
							
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
