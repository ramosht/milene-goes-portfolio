import * as S from './styles';
import { FC } from 'react';

type ExperienciaProps = {
  title: string;
  university: string;
  period: string;
  description: string;
};

const Experiencia: FC<ExperienciaProps> = ({
  title,
  period,
  description,
  university,
}) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <span className="periodo">{period}</span>
      <span className="universidade">{university}</span>
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default Experiencia;
