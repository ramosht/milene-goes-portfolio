import { colors } from '../../../styles/variables';
import * as S from './styles';

type DescriptionProps = {
  text: string;
  name: string;
  image: string;
};

const Description: React.FC<DescriptionProps> = ({ text, name, image }) => {
  return (
    <S.Wrapper>
      <S.Icon size={48} color={colors.primary} />
      <S.Text>{text}</S.Text>
      <S.Profile>
        <S.ProfileImage src={image} alt={name} />
        <S.ProfileName>{name}</S.ProfileName>
      </S.Profile>
    </S.Wrapper>
  );
};

export default Description;
