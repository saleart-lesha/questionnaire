import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  margin: 16px 0;
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: #495057;
  font-size: 1rem;
  transition: 0.2s ease all;
  pointer-events: none;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  color: #495057;
  font-weight: 500;
  border: 1px solid lightgray;
  border-radius: 16px;
  transition: border-color 0.2s;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

  &:focus {
    border-color: #bac8ff;
    outline: none;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 0;
    left: 15px;
    font-weight: 700;
    font-size: 1rem;
    color: #495057;
    transform: translateY(-100%);
  }
`
