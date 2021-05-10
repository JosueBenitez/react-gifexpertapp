import React, { useState } from 'react';
import PropTypes from 'prop-types'


const AddCategory =({setCategoria})=>{
    const [inputValue, setInputValue] = useState('')
    const handleInpuntChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit Hecho')
        if(inputValue.trim().length >2){
            setCategoria(cats=>[inputValue,...cats]); 
            setInputValue('')

        }
          
        
    }
    return(
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInpuntChange}
                />
            </form>
    )
}

AddCategory.propTypes={
    setCategoria: PropTypes.func.isRequired
}


export default AddCategory;