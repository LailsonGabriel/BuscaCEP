import React from 'react';
import { Field } from 'formik';
import { InputContainer } from './style.js';

export default function InputReusable({ name, title, onChange,
  value, placeholder, type, array, setStateSelect }) {
  return (
    <InputContainer>
      <label htmlFor={name}>{title}</label>
      {
        array ?
          <select onChange={onChange} name={name} onClick={setStateSelect}>
            {array.map((state, i) => (
              <option
                key={i}
                value={state.sigla || state.nome}
              >
                {state.sigla || state.nome}
              </option>
            ))}
          </select>
          :
          <Field
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
          />
      }
    </InputContainer>
  )
}
