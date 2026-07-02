import { useState } from "react"

export default function InputText({labelText, inputValue, fieldName, onValueChange}) {
    function handleChange(event) {
        const newValue = event.target.valueAsNumber;
        onValueChange(fieldName, newValue);
    }
    return (
        <div>
            <label>{labelText}</label>
            <input type="number" value={inputValue} onChange={handleChange}></input>
        </div>
    )
}