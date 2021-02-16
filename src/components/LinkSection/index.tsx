import Link from 'next/link';
import * as S from './styles';

type LinkSectionProps = {
  children: React.ReactNode;
  to: string;
};

const LinkSection: React.FC<LinkSectionProps> = ({ children, to }) => {
  return (
    <S.Wrapper>
      <Link href={to}>{children}</Link>
    </S.Wrapper>
  );
};

export default LinkSection;
