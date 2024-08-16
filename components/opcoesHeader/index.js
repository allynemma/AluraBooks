import styled from 'styled-components'

const OpcoesContainer = styled.ul`
  display: flex;
`
const OpcaoContainer = styled.li`
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader () {
    return (
        <OpcoesContainer>
          {textoOpcoes.map((texto) => (
            <OpcaoContainer><p>{texto}</p></OpcaoContainer>
        ) )}</OpcoesContainer>
          
    )
}

export default OpcoesHeader