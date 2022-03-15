import React from 'react'
import productData from '../assets/fake-datas/product'
import Helmet from '../component/Helmet'
import Section,{SectionBody, SectionTitle} from '../component/Section'
import Grid from '../component/Grid'
import ProductCard from '../component/ProductCard'
import ProductView from '../component/ProductView'

const Product = props => {
  const product = productData.getProductBySlug(props.match.params.slug)
  const relatedProducts= productData.getProducts(8)
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product}/>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Khám Phá Thêm
        </SectionTitle>
        <SectionBody>
          <Grid 
          col={4}
          mdCol={2}
          smCol={1}
          gap={20}>
            {
              relatedProducts.map((item,index)=>(
                <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
              )
              )
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product