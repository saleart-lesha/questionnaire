import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  margin: 1em 1.5em;
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  color: darkgray;
  font-size: 1rem;
  transition: 0.2s ease all;
  pointer-events: none;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  transition: border-color 0.2s;

  &:focus {
    border-color: black;
    outline: none;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 0;
    left: 8px;
    font-size: 1rem;
    color: black;
    transform: translateY(-100%);
  }
`
