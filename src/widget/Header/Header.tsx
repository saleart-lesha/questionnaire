import { useLocation } from 'react-router-dom'
import * as S from './HeaderStyled'

const Header = () => {
  const location = useLocation()

  return (
    <S.Header>
      <S.Nav>
        <S.LinkWrapper>
          <S.Links to='/'>
            <S.Text $color={location.pathname === '/'}>Опросы</S.Text>
          </S.Links>
          <S.Links to='/'>
            <S.Text>Пройденные опросы</S.Text>
          </S.Links>
        </S.LinkWrapper>
      </S.Nav>
    </S.Header>
  )
}

export default Header
