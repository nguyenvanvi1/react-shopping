import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../component/Helmet'
import HeroSlider from '../component/HeroSlider'
import heroSliderData from '../assets/fake-datas/hero-slider'
import Section,{SectionTitle,SectionBody} from '../component/Section'
import PolicyCart from '../component/PolicyCart'
import Grid from '../component/Grid'
import policy from '../assets/fake-datas/policy'
import productData from '../assets/fake-datas/product'
import ProductCard from '../component/ProductCard'
import banner from '../assets/images/banner.png'
const Home = () => {
  return (
    <Helmet title='Trang chủ'>
      {/*hero slide */}
      <HeroSlider
        data={heroSliderData}
        control={true}
      />

      {/* end hero slide */}
      {/*policy section */}
      <Section>
        <SectionBody>
          <Grid col={4}
            mdCol={2}
            smCol={1}
            gap={20}>
              {
            policy.map((item,index)=>
            <Link to="/policy" key={index}>
            <PolicyCart 
            name={item.name}
            description={item.description}
            icon={item.icon}/></Link>
            )
          }
             </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Top Sản Phẩm Bán Chạy Trong Tuần
        </SectionTitle>
        <SectionBody>
        <Grid col={4}
            mdCol={2}
            smCol={1}
            gap={20}>
              {
                productData.getProducts(4).map((item, index)=>(
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
             </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          san pham moi nhat
        </SectionTitle>
        <SectionBody>
        <Grid col={4}
            mdCol={2}
            smCol={1}
            gap={20}>
              {
                productData.getProducts(8).map((item, index)=>(
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
             </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="/category">
            <img src={banner}/>
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Pho bien
        </SectionTitle>
        <SectionBody>
        <Grid col={4}
            mdCol={2}
            smCol={1}
            gap={20}>
              {
                productData.getProducts(8).map((item, index)=>(
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
             </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Home