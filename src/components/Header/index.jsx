import * as s from "./styles"
import Button from "../Button"
import dio from '../../assets/dio.png'
import base from "../../basename"

const Header = () => {
  return (
    <s.Wrapper>
        <s.HeaderContainer>
            <s.Row>
                <a href="/">
                    <s.LogoImg src={dio} alt ="Logo da DIO"/>
                </a>
                <s.SearchInputContainer>
                    <s.Input placeholder="Buscar..."/>
                </s.SearchInputContainer>
                <s.Menu>Live Code</s.Menu>
                <s.Menu>Global</s.Menu>
            </s.Row>
            <s.Row>
                <s.MenuRight href="#">Home</s.MenuRight>
                <a href={`${base}/login`}>
                    <Button title="Entrar"></Button>
                </a>
                <Button title="Cadastrar"></Button>
            </s.Row>
        </s.HeaderContainer>
    </s.Wrapper>
  )
}

export default Header