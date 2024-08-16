import Logo from '../logo/index'
import OpcoesHeader from '../opcoesHeader/index';
import IconesHeader from '../iconesHeader/index';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display:flex;
    background-color: #FFF;
    justify-content: center;
`

function Header () {
    return (
    <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
        
      )
}

export default Header;