import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import contact from '../../assets/contact.svg';

import {
  Main,
  Email,
  Phone,
  Image,
  Title,
  Content,
  Message,
  Container,
  EmailPhone,
} from './styles';
import Footer from '../../components/Footer';

const ContactPage: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  return (
    <Sidebar
      selectedPage="CONTACT"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container>
        <Header
          color="BLACK"
          selectedPage="CONTACT"
          onMenuShown={handleOnMenuToggle}
        />
        <Content>
          <Main>
            <Title>CONTATO</Title>
            <Message>
              Tem alguma dúvida, sugestão ou, mesmo, reclamação? Entre em
              contato.
            </Message>
            <EmailPhone>
              <Email href="mailto:chenoli.dev@gmail.com">
                chenoli.dev@gmail.com
              </Email>
              <Phone
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=5519997570598"
              >
                (19) 9 9757 0598
              </Phone>
            </EmailPhone>
          </Main>
          <Image>
            <img src={contact} alt="" />
          </Image>
        </Content>
        <Footer />
      </Container>
    </Sidebar>
  );
};

export default ContactPage;
