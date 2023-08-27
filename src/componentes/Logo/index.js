import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoParagrafo = styled.p`
    margin-left: 0.5em;
    font-size: 1.5em;
    font-weight: bold;
`
const LogoImg = styled.img`
    margin-left: 0.5em ;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo da livraria' />
            <LogoParagrafo>Jhon Books</LogoParagrafo>
        </LogoContainer>
    )

}

export default Logo;