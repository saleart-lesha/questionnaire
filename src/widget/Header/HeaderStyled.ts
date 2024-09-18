import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  padding: 32px 0px;
  position: sticky;
  top: 0;
  background-color: #f1f3f5;
  z-index: 10;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const LinkWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  & :first-child {
    margin: 0;
  }
`
export const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 32px;
  & :hover {
    color: #ff6464;
  }
`

export const Text = styled.span<{ $color?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ $color }) => ($color ? '#ff6464' : '#000000')};
  cursor: pointer;
  transition: color 0.3s ease;
`
