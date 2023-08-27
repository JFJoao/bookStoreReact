import { styled } from 'styled-components'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const iconesList = [perfil, sacola]
const Icone = styled.li`
    padding: 0 0.8em;
    width: 30px;
`
const EstiloIcones = styled.ul`
    font-size: 0.92em;
    min-width: 120px;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
    height: 100%;
    cursor: pointer;
    padding: 0 0.5em;
    margin-right: 25px;
    list-style: none;
    margin: auto 0;
`

function IconesHeader (){
    return (
    <EstiloIcones>
        { iconesList.map ( (icone) => (
        <Icone><img src={icone} alt='icone'></img></Icone>
    ) ) }
    </EstiloIcones>
    )
}

export default IconesHeader;