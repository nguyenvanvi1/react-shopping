import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

const HeroSlider = props => {
    const data = props.data
    const [activeSlide,setActiveSlide]=useState(0)
    const nextSlide = ()=>{
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index)
    }
    const prevSlide = ()=>{
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index)
    }
  return (
    <div className='hero-slider'>
      {
        data.map((item,index)=>(
             <HeroSliderItem key={index} item={item} active ={index === activeSlide}/>
          ))
        }
        {
            props.control ? (
                <div className='hero-slider__control'>
                    <div className="hero-slider__control__item" onClick={prevSlide}>
                        <box-icon name='left-arrow-alt'></box-icon>
                    </div>
                    <div className="hero-slider__control__item">
                        <div className="index">
                            {activeSlide+1}/{data.length}
                        </div>
                    </div>
                    <div className="hero-slider__control__item" onClick={nextSlide}>
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                </div>
            ):null
        }
    </div>
  )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool
}
const HeroSliderItem = props =>(
    <div className={`hero-slider__item ${props.active ? 'active':""}`}>
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info__description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
                <Link to={props.item.path}>
                    <Button 
                    backgroundColor={props.item.color}
                    icon="cart"
                    animate={true}
                    size="sm"
                    >Xem Chi tiet</Button>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt=""/>
        </div>
    </div>
)

export default HeroSlider
