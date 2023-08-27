import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    width: 100vw;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;