import Header from "../../components/Header"
import banner from "../../assets/banner.png"
import * as s from "./styles"
import Button from "../../components/Button"
import base from "../../basename"

const Home = () => {
    return (
        <>
            <Header/>
            <s.HomeContainer>
                <div>
                    <s.Title>
                        <s.TitleHighlight>
                            Implemente <br />
                        </s.TitleHighlight>
                        o seu futuro global agora!
                    </s.Title>
                    <s.TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </s.TextContent>
                    <a href={`${base}/login`}>                        
                        <Button title="Começar agora" variant="secondary" onClick={() => null}/>
                    </a>
                </div>
                <div>
                    <img src={banner} alt ="Imagem de homem conectado"/>
                </div>
            </s.HomeContainer>
        </>
    )
  }
  
  export default Home