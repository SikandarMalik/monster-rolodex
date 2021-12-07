import React from "react";
import './seach-field.style.css'

export const SearchField = ({searchField, placeholder}) => {
    return (
        <input
            className={'input'}
            type="search"
            placeholder={placeholder}
            onChange={searchField}
        />
    )
}
