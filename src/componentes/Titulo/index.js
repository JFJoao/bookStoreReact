import styled from 'styled-components'

export const Titulo = styled.h2`
    widht: 100%;
    padding: 30px 0;
    color: ${props => props.cor || '#EB9B00'};
    background-color: ${props => props.corFundo || '#FFF'};
    font-size: 36px;
    text-align: center;
    margin: 0;
`