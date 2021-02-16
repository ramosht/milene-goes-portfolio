import * as S from './styles';
import { FC } from 'react';

type ExperienciaProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  clients?: string;
};

const Experiencia: FC<ExperienciaProps> = ({
  title,
  company,
  period,
  description,
  clients,
}) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <span className="empresa">{company}</span>
      <span className="periodo">{period}</span>
      {clients && <span className="clients">{clients}</span>}
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default Experiencia;
