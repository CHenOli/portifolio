import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import illustration from '../../assets/illustration.png';

import {
  Main,
  Left,
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

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
              <Button>SAIBA MAIS</Button>
            </div>
          </Left>
          <Right>
            <Image src={illustration} alt="" />
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
