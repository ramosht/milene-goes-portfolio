import { FC } from 'react';

import * as S from './styles';

type LevelProps = {
  level: 1 | 2 | 3 | 4 | 5;
};

const Level: FC<LevelProps> = ({ level }) => {
  return (
    <S.Wrapper>
      <S.Bullet checked={level >= 1} />
      <S.Bullet checked={level >= 2} />
      <S.Bullet checked={level >= 3} />
      <S.Bullet checked={level >= 4} />
      <S.Bullet checked={level >= 5} />
    </S.Wrapper>
  );
};

export default Level;
