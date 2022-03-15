import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {
    const inputRef = React.useRef(null)
    const onChange = ()=> {
        if(props.onChange){
            props.onChange(inputRef.current)
        }
    }
  return (
    <label className='custom-checkbox'>
        <input type="checkbox" ref={inputRef} checked={props.checked} onChange={onChange}></input>
        <span className='custom-checkbox__checkmark'>
            <box-icon name='check' className="custom-checkbox__checkmark__icon" ></box-icon>
        </span>
        {props.label}
    </label>
  )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox
