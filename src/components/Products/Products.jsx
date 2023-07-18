import React from 'react';
import {
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
						{/* <ProductsCard key={index}>
							<div style={{display:'flex',width:"100%", border: "1px solid red",justifyContent:'center',alignItems:'center'}}>
								{product.icon}
							</div>
							
						</ProductsCard> */}
						
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
