import Header from "../../components/Header"
import Input from "../../components/Input"
import * as s from "./styles"
import Button from "../../components/Button"

import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'

const Login = () => {
    return (
        <>
            <Header/>
            <s.HomeContainer>
                <s.Column>
                    <s.Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </s.Title>
                </s.Column>
                <s.Column>
                    <s.Wrapper>
                        <s.TitleLogin>Faça seu cadastro</s.TitleLogin>
                        <s.SubtitleLogin>Faça seu login e make the change._</s.SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<EmailIcon/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<LockIcon/>}/>
                            <Button title="Entrar" variant="secondary"/>
                        </form>
                        <s.Row>
                            <s.ForgotText>Esqueci minha senha</s.ForgotText>
                            <s.CreateText>Criar minha conta</s.CreateText>
                        </s.Row>
                    </s.Wrapper>
                </s.Column>
            </s.HomeContainer>
        </>
    )
  }
  
  export default Login