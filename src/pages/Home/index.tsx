import React, { useState, useEffect } from 'react';
import {
  Container,
  ContentMenu,
  ContentBanner,
  Main,
  ContainerMovie,
  Products,
  ContainerCards,
  AppDownloadStore,
  AppContent,
  Footer,
} from './styles';

import Button from '../../components/Button';

import LogoImg from '../../assets/logo.svg';
import PlayStore from '../../assets/badge_play.svg';
import AppStore from '../../assets/badge_app.svg';

import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';
import Youtube from '../../assets/youtube.svg';
import Twitter from '../../assets/twitter.svg';

import Banner from '../../assets/banner.png';
import Card from '../../assets/neon_card.png';
import Fees from '../../assets/neon_fees.png';
import Invest from '../../assets/neon_invest.png';
import AppDash from '../../assets/app_dashboard.png';
import Seal from '../../assets/selo_peb.png';

const Home: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

  return (
    <Container>
      <ContentMenu scrollPosition={scrollPosition}>
        <h1>
          <img src={LogoImg} alt="Logotipo Neon" />
          <title>Logotipo Neon</title>
        </h1>

        <ul>
          <li>
            <a href="http://localhost:3000">Conta</a>
          </li>
          <li>
            <a href="http://localhost:3000">Pejota</a>
          </li>
          <li>
            <a href="http://localhost:3000">Perguntas</a>
          </li>
          <li>
            <a href="http://localhost:3000">Tarifas</a>
          </li>
          <li>
            <a href="http://localhost:3000">#FocaNoDinheiro</a>
          </li>
          <li>
            <a href="http://localhost:3000">Conheça a Neon</a>
          </li>
          <li>
            <Button>Abra sua conta</Button>
          </li>
        </ul>
      </ContentMenu>
      <ContentBanner>
        <article>
          <header>
            <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
            <p>
              Neon, conta grátis e cartão sem anuidade. Abra sua conta, é só
              baixar o app!
            </p>
            <p>
              <Button>Abra sua conta</Button>
            </p>
          </header>
          <img src={Banner} alt="App mobile screen" />
        </article>
      </ContentBanner>
      <Main>
        <ContainerMovie>
          <header>
            <h1 style={{ display: 'none' }}>Video de campanha Neon</h1>
          </header>
          <div className="container-video">
            <iframe
              title="Video de campanha Neon: Windersson Blogueira"
              src="https://www.youtube.com/embed/cEM7Ff_d1BU?controls=0&enablejsapi=1&origin=https%3A%2F%2Fneon.com.br"
              frameBorder={0}
              width={710}
              height={399}
              allowFullScreen
            />
          </div>
        </ContainerMovie>
        <Products>
          <header>
            <h1>Resolva sua vida direto no app!</h1>
          </header>
          <ContainerCards>
            <article>
              <header>
                <h2>Crédito</h2>
                <p>
                  Sua conta digital tem cartão de crédito sem anuidade nem
                  complicação.
                </p>
              </header>
              <img src={Card} alt="Cartão Neon" />
            </article>

            <article>
              <header>
                <h2>Sem taxas</h2>
                <p>
                  Você não paga nada por transferências, boletos de depósito e
                  outros serviços no app.
                </p>
              </header>
              <img src={Fees} alt="Neon Taxas" />
            </article>

            <article>
              <header>
                <h2>Investimentos</h2>
                <p>Rendem mais que a poupança e você resgata quando quiser.</p>
              </header>
              <img src={Invest} alt="Neon Investimentos" />
            </article>
          </ContainerCards>
          <div className="button-all-products">
            <Button>Todos os produtos</Button>
          </div>
        </Products>
        <AppDownloadStore>
          <AppContent>
            <header>
              <h1>
                Que tal abrir uma conta digital para ver como a gente faz a sua
                vida mais simples?
              </h1>
              <img src={PlayStore} alt="Play Store" />
              <img src={AppStore} alt="Apple Store" />
            </header>
            <img src={AppDash} alt="Dashboard do App" />
          </AppContent>
        </AppDownloadStore>
      </Main>
      <Footer>
        <header>
          <img src={Facebook} alt="Facebook" width={30} />
          <img src={Linkedin} alt="Linkedin" width={30} />
          <img src={Twitter} alt="Twitter" width={30} />
          <img src={Instagram} alt="Instagram" width={30} />
          <img src={Youtube} alt="YouTube" width={30} />
        </header>
        <div className="container-footer">
          <ul>
            <li>
              <a href="http://localhost: 3000">termos de uso</a>
            </li>
            <li>
              <a href="http://localhost: 3000">política de privacidade</a>
            </li>
            <li>
              <a href="http://localhost: 3000">carreira</a>
            </li>
            <li>
              <a href="http://localhost: 3000">ouvidoria</a>
            </li>
          </ul>
        </div>
        <div className="copyright-footer">
          <hr />
          <ul>
            <li>
              <strong>Atendimento: </strong>
              <span>oi@neon.com.br (24 horas)</span>
            </li>
            <li>
              <strong>Impresa: </strong>
              <span>imprensa@neon.com.br</span>
            </li>
          </ul>
          <hr />
        </div>
        <div className="info-footer">
          <div className="info">
            <p>Neon Pagamentos S.A. – CNPJ 20.855.875/0001-82 </p>
            <p>R. Hungria, 1400 – Jardim Europa, São Paulo – SP, 01455-000</p>
            <p>Neon Pagamentos® 2018</p>
            <p>&nbsp;</p>
            <p>
              Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo.
              A gente também.
            </p>
            <p>
              Por isso o time Neon está sempre trabalhando para fazer a conta
              digital perfeita para você <span>; )</span>
            </p>
            <p />
          </div>
          <div className="seal">
            <img src={Seal} alt="Selo" />
            <p>
              Esta empresa é membro da ABCD e, como tal, atende às Orientações
              de Conduta constantes em seu Código de Ética e Autorregulação
            </p>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
