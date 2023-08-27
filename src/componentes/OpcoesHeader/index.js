import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const Opcao = styled.ul`
    font-size: 0.92em;
    min-width: 120px;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
    height: 100%;
    cursor: pointer;
    padding: 0 0.5em;
    list-style: none;
`
const Li = styled.li`
    list-style: none;
    margin: auto 0.8em;
`

function OpcoesHeader () {
    return (
        <Opcao>
            { textoOpcoes.map( (texto) => (
            <Li><p>{texto}</p></Li>
        ) ) }
        </Opcao>
    )
}

export default OpcoesHeader;