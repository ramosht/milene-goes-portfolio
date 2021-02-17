import { useMemo } from 'react';
import MediaQuery from 'react-responsive';
import { md } from '../../../styles/breakpoints';
import * as S from './styles';

const Footer: React.FC = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <S.Wrapper>
      <div className="container">
        <p>&copy; {currentYear} Milene Góes.</p>
      </div>
    </S.Wrapper>
  );
};

export default Footer;
