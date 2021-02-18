import * as S from '../../components/styles/contato/styles';
import Main from '../../template/Main';
import Title from '../../components/Title';
import Head from 'next/head';

const Contato = () => {
  return (
    <>
      <Head>
        <title>Milene Góes | Contatos</title>
        <meta
          name="description"
          content="Contatos profissionais: Linkedin, telefone, whatsApp e e-mail"
        />
      </Head>
      <Main current="contact">
        <Title>Contato</Title>
        <S.ItensContato>
          <S.ItemContato>
            <a
              href="https://wa.me/5515988116612"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/contact/whatsapp.png" alt="Ícone whatsapp" />
              <span>+55 15 98811-6612</span>
            </a>
          </S.ItemContato>
          <S.ItemContato>
            <a
              href="mailto:jornalismo.milenegoes@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/contact/email.png" alt="Ícone whatsapp" />
              <span>jornalismo.milenegoes@gmail.com</span>
            </a>
          </S.ItemContato>
          <S.ItemContato>
            <a href="#" target="_blank" rel="noreferrer">
              <img src="/img/contact/linkedin.png" alt="Ícone whatsapp" />
              <span>Milene Góes</span>
            </a>
          </S.ItemContato>
        </S.ItensContato>
      </Main>
    </>
  );
};

export default Contato;
