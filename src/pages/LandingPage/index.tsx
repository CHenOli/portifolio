import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import sign from '../../assets/sign.png';
import illustration from '../../assets/illustration.png';

import {
  Main,
  Left,
  Sign,
  Image,
  Right,
  Title,
  Button,
  TopRight,
  Container,
  BottomLeft,
  BottomRight,
  Description,
} from './styles';

const LandingPage: React.FC = () => {
  const history = useHistory();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  const handleNavigate = useCallback(() => {
    window.open('https://www.artstation.com/julianobenatti', '_blank');
  }, []);

  const handleNavigateToProjects = useCallback(() => {
    history.push('/projects');
  }, [history]);

  return (
    <Sidebar
      selectedPage="LANDING"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container>
        <Header onMenuShown={handleOnMenuToggle} selectedPage="LANDING" />
        <Main>
          <Left>
            <div>
              <Title>Programador Freelancer</Title>
              <Description>
                Soluções ideais para você e para o seu negócio. Entre em
                contato!
              </Description>
              <Button onClick={handleNavigateToProjects}>SAIBA MAIS</Button>
            </div>
          </Left>
          <Right>
            <Image src={illustration} alt="" />
            <Sign src={sign} alt="" onClick={handleNavigate} />
          </Right>
        </Main>
        <TopRight />
        <BottomRight />
        <BottomLeft />
      </Container>
    </Sidebar>
  );
};

export default LandingPage;
