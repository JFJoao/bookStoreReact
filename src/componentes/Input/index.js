import styled from 'styled-components'

const Input = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    border 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width : 220px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 1em;
        width: fit-content;
    }
`

export default Input;