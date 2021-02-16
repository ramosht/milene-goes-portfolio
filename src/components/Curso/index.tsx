import * as S from './styles';
import { FC } from 'react';

type CursoProps = {
  title: string;
  university: string;
  year: string;
  description?: string;
};

const Curso: FC<CursoProps> = ({ title, year, description, university }) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <span className="universidade">{university}</span>
      <span className="periodo">{year}</span>
      {description && <p>{description}</p>}
    </S.Wrapper>
  );
};

export default Curso;
