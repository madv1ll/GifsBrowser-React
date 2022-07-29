import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrimmed = inputValue.trim()
        if (inputValueTrimmed.length <= 1) return;
        
        //setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValueTrimmed );
        setInputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text" 
        placeholder="Buscar gif"
        value={ inputValue }
        onChange={ onInputChanged }
        />
    </form>

  )
}
