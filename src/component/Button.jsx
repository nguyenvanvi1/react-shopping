import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor :'bg-main'
    const size = props.size ? 'btn-' + props.size:''
    const animate = props.animate ? 'btn-animate':''
  return (
    <button
        className={`btn ${bg} ${size} ${animate}`}
        onClick={props.onclick ? ()=> props.onclick():null}
    >
    <span className='btn__txt'>{props.children}</span>
    {
        props.icon ? (
            <span className='btn__icon'>
                <box-icon name={`${props.icon}`} ></box-icon>
            </span>
        ):null
    }
    </button>
  )
}

Button.propTypes = {
    backgroundColor:PropTypes.string,
    size:PropTypes.string,
    icon:PropTypes.string,
    animate : PropTypes.bool,
    onclick: PropTypes.func
}

export default Button