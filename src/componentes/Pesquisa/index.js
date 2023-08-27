import { useState } from 'react'
import Input from '../Input/index.js'
import styled from 'styled-components'
import {livros} from './dadosPesquisa.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Titulo } from '../Titulo/index.js';
{/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}

const PesquisaContainer = styled.section `
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    min-height: 300px;
    max-height: 670px;
    widht: 100%;
    position: relative;
`
const Subtitulo = styled.h3`
    font-size: 1.75em;
    font-weight: 500;
    text-align: center;
    margin-bottom: 40px;

`
const Resultado = styled.div`
    display:flex;
    justify-content: center;
    align-items: top;
    margin-bottom: 1.1em;
    cursor: pointer;
    margin-top: 1.5em;
    
    p {
        width: 12.5em;
    }
    img {
        width: fit-content;
    }
    &:hover {
        border: 1px solid #fff;
    }
`
const InputContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`
const CardResultado = styled.div`
    margin-right: 1.4em;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return(
        <PesquisaContainer>
        <Titulo corFundo='linear-gradient(90deg, #002F52 35%, #326589 165%)' cor='#FFF'>Já sabe por onde começar ?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
        <InputContainer>
            <FontAwesomeIcon icon={faMagnifyingGlass} 
                style={{ 
                position: 'relative',
                // zIndex: 999,
                left: '95px', 
                top:'25%',
                transform: 'translateY(58%)',
                fontSize: '1.5em', 
                color: '#682',
            }} />
            <Input
                placeholder='Procure sua próxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
        </InputContainer>
        <Resultado>
            {livrosPesquisados.map( livro => (
                    <CardResultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='Foto de capa do livro'></img>
                    </CardResultado>
            ))}
        </Resultado>
        </PesquisaContainer>

    )
}
<script src="https://kit.fontawesome.com/e84a804523.js" crossorigin="anonymous"></script>
export default Pesquisa;