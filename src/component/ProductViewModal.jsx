import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductView from './ProductView'
import { remove } from '../redux/product-modal/productModalSlice'
import productData from '../assets/fake-datas/product'
import Button from './Button'
 
const ProductViewModal = () => {
    const productSlug = useSelector((state)=>state.productModal.value)
    const dispatch = useDispatch()
    const [product,setProduct]=useState(undefined)
    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug])
    // const product = productData.getProductBySlug('quan-jean-phong-cach-18')
  return (
    <div className={`product-view__modal ${product === undefined ? '':'active'}`}>
        <div className="product-view__modal__content">
            <ProductView product={product}/>
            <div className="product-view__modal__content__close">
                <Button
                    size='sm'
                    onclick={()=>dispatch(remove())}
                >
                    Dong
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ProductViewModal