import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components';
import { Titulo } from '../titulo/index';
import CardRecomenda from '../CardRecomenda/index';
import livro2 from '../../assets/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function ultimosLancamentos () {
 return (
   <UltimosLancamentosContainer>
      <Titulo cor = '#EB9B00' 
               tamFonte = '36px'>
         Últimos lançamentos</Titulo>

      <NovosLivrosContainer>
         {livros.map (livro => (
         <img src = {livro.src} alt = ''></img>
      ))}
      </NovosLivrosContainer>
      <CardRecomenda
         titulo="Talve você se intersse por"
         subtitulo="Angular 11"
         descricao="Contruindo ima aplicação com plataforma Google"
         img = {livro2}
         />
   </UltimosLancamentosContainer>
      
    
 )
}

export default ultimosLancamentos;