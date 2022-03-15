import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithCommas from '../untils/numberWithCommas'
import { withRouter } from 'react-router-dom'
const ProductView = props => {
    let product =props.product
    if(product ===undefined) product={
        price:0,
        title :"",
        colors:[],
        size:[]
    }
    const [previewImg, setPreviewImg]=useState(product.image01)
    const[description,setDescription]=useState(false)
    const [color,setColor]=useState(undefined)
    const [size,setSize]=useState(undefined)
    const [quantity,setQuantity]=useState(1)
    const updateQuantity = (type)=>{
        if(type=='plus'){
            setQuantity(quantity+1)

        }else{
            setQuantity(quantity - 1 < 1 ? 1:quantity -1 )
        }
    }
    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])
    const check = ()=>{
        if(color=== undefined){
            alert('vui long chon mau sac')
            return false
        }
        if(size=== undefined){
            alert('vui long chon kich co')
            return false
        }
        return true
    }
    const addToCart =()=>{
        if(check())
            console.log({color,size,quantity})
    }
    const goToCart = ()=>{
        if(check()) props.history.push('/cart ')
    }
  return (
    <div className='product'>
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item" onClick={()=>setPreviewImg(product.image01)}>
                    <img src={product.image01} alt="" />
                </div>
                <div className="product__images__list__item" onClick={()=>setPreviewImg(product.image02)}>
                    <img src={product.image02} alt="" />
                </div>
            </div>
            <div className="product__images__main">
                <img src={previewImg} alt="" />
            </div>
            <div className={`product-description ${description ? 'expand' :''}`}>
                <div className="product-description__title">
                    chi tiet san pham
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
                <div className="product-description__toggle">
                    <Button size='sm' onclick={()=>setDescription(!description)}>
                        {
                            description ? 'thu gon':'xem them'
                        }
                    </Button>
                </div>
            </div>
        </div>
        <div className="product__info">
            <h1 className='product__info__title'>{product.title}</h1>
            <div className="product__info__item">
                <span className='product__info__item__price'>
                    {
                        numberWithCommas(product.price)
                    }
                </span>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    mau sac
                </div>
                <div className="product__info__item__list">
                    {

                        product.colors.map((item,index)=>(
                            <div key={index} className={`product__info__item__list__item ${color ===item ? 'active':''}`} onClick={()=>setColor(item)}>
                                <div className={`circle bg-${item}`}>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    kich co
                </div>
                <div className="product__info__item__list">
                    {

                        product.size.map((item,index)=>(
                            <div key={index} className={`product__info__item__list__item ${size===item ? 'active':''}`} onClick={()=>setSize(item)}>
                                <span className="product__info__item__list__item__size">
                                   {item} 
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    so luong
                </div>
                <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn" onClick={()=>updateQuantity('minus')}>
                        <box-icon name='minus'></box-icon>
                    </div>
                    <div className="product__info__item__quantity__btn">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn" onClick={()=>updateQuantity('plus')}>
                        <box-icon name='plus-medical'></box-icon>
                    </div>
                </div>
            </div>
            <div className="product__info__item">
                <Button onclick={()=>addToCart()}>them vao gio</Button>
                <Button onclick={()=>goToCart()}>MUA NGAY</Button>
            </div>
            <div className={`product-description mobile ${description ? 'expand' :''}`}>
                <div className="product-description__title">
                    chi tiet san pham
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
                <div className="product-description__toggle">
                    <Button size='sm' onclick={()=>setDescription(!description)}>
                        {
                            description ? 'thu gon':'xem them'
                        }
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)