import { livrosLancamentos } from "./dadosUltimosLancamentos"
import styled, { keyframes } from "styled-components"
import { Titulo } from "../Titulo"
import bgLancamentos from "../../imagens/bgUltimosLancamentos.png"
import goldenFrame from "../../imagens/goldenFrame.png"
import { Keyframes } from "styled-components"

const Neon = keyframes`
    from { 
        filter: drop-shadow(0 0 0 #FFF);
    }
    to {
        filter: drop-shadow(0 0 40px #ffd700)
    }
`
const UltimosLancamentosContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainter = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    color: #FFF;
    
`
const NovosLivrosContainterInside = styled.div`
    margin-top: 30px;
    font-weight: 500;
    width: 100%;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    margin: 15px 70px;
    padding: 10px;
    // background-image: url(${bgLancamentos});
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
    border: 40px solid;
    border-image-source: url(${goldenFrame}); //borda branca ficou ok
    border-image-slice: 100;
    border-image-repeat: round;
    animation: ${Neon} 2s alternate infinite ease-in-out;
`
const NomeLivro = styled.p`
    color: #FFF;
`


function UltimosLancamentos () {
    return(
        <UltimosLancamentosContainer>
            <Titulo>Ultimos Lançamentos</Titulo>
            <NovosLivrosContainter>
            {livrosLancamentos.map(livro => (
                <NovosLivrosContainterInside>
                <img src={livro.src} alt="Capa do livro"></img>
                <NomeLivro>{livro.nome}</NomeLivro>
                </NovosLivrosContainterInside>
            ))}
            
            </NovosLivrosContainter>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;