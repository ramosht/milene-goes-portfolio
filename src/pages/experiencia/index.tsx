import Main from '../../template/Main';
import Title from '../../components/Title';
import Experiencia from '../../components/Experiencia';

const ExperienciaPage = () => {
  return (
    <Main current="experiencia">
      <Title>Experiência profissional</Title>

      <Experiencia
        title="Assessora de imprensa"
        company="CRB Construtora / Job"
        period="11/2020 a 02/2021"
        description="Assessoria de imprensa: definição de pautas e estratégia de comunicação; produção de releases; follow-up e acompanhamento de entrevistas"
      />

      <Experiencia
        title="Copywriter – estratégia de SEO"
        company="Blog Siga Pregão / Job "
        period="08 a 12/2020"
        description="Produção de artigos sobre empreendedorismo com foco em licitações públicas e estratégia de SEO."
      />

      <Experiencia
        title="Marketing político eleitoral"
        company="Campanha política para vereador em Itu – SP / Job"
        period="09 a 11/2020"
        description="Estratégia e produção de conteúdo para redes sociais; produção de informativo impresso."
      />

      <Experiencia
        title="Marketing"
        company="Faculdade de Engenharia de Sorocaba (Facens) / Job"
        period="10/2020"
        description="Produção de pautas e textos para o blog Facens; produção e acompanhamento de podcast sobre eventos realizados na universidade e temas como educação, cultura, entretenimento, saúde e bem-estar. "
      />

      <Experiencia
        title="Assessora de imprensa, marketing e comunicação interna"
        company="Veolia Brasil"
        period="08/2013 a 06/2020"
        description="Assessoria de imprensa: estratégias de comunicação empresarial com foco na imprensa regional e nacional; produção de pautas e releases sobre gestão de água, resíduos, energia, Total Waste Management (TWM) e economia circular; divulgação na imprensa por meio de follow-up; acompanhamento de entrevistas; clipping; gerenciamento e treinamento de crise institucional; produção de textos para o site institucional da Veolia Brasil; estratégias para marketing digital com foco em geração de leads por meio de conteúdos para o Linkedin da Veolia Brasil; produção mensal de KPI com métricas de resultados de marketing digital; tradução de textos do espanhol para o português; revisão de textos; produção de jornal interno com foco em comunicação interna e acompanhamento de eventos com a Veolia de seis países da América Latina."
      />

      <Experiencia
        title="Assessora de imprensa"
        company="Lettera Comunicação Estratégica"
        period="09/2017 a 08/2018 "
        clients="Cliente atendido: Senac unidades Sorocaba, Itu e Itapetininga."
        description="Assessoria de imprensa; produção de releases em educação com temas sobre saúde e bem-estar, gestão e negócios, gastronomia e beleza e estética; sugestão de pautas; follow-up; acompanhamento de entrevistas e clipping. "
      />

      <Experiencia
        title="Assessora de imprensa"
        company="Vergili Comunicação Integrada"
        period="11/2013 a 07/2017 "
        clients="Clientes atendidos: Senac unidades Sorocaba, Itu e Itapetininga e Centro das Indústrias do Estado de São Paulo (CIESP)."
        description="Assessoria de imprensa; produção de releases em educação e economia; follow-up; clipping; acompanhamento de entrevistas e gerenciamento de crise institucional."
      />

      <Experiencia
        title="Repórter de Mídias Digitais e jornal impresso"
        company="Rede Bom Dia / Diário de S. Paulo "
        period="07/2011 a 04/2013"
        description="Reportagem, redação, revisão e edição de textos para os portais Rede Bom Dia e Diário de S. Paulo; produção de conteúdo e gerenciamento das redes sociais Twitter e Facebook; reportagem para a versão impressa do jornal Bom Dia Sorocaba nas editorias de Polícia, Economia, Cidades, Educação e Cultura."
      />
    </Main>
  );
};

export default ExperienciaPage;
