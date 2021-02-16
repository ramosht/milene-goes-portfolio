import { useCallback, useState, useEffect } from 'react';
import { md } from '../../../styles/breakpoints';
import ImageGallery from 'react-image-gallery';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';
import { colors } from '../../../styles/variables';

type Image = {
  original: string;
  thumbnail: string;
};
type ComponentProps = {
  images: Image[];
  startIndex: number;
  setStartIndex: (val: number) => void;
  setViewerIsOpen: (val: boolean) => void;
};

const Component: React.FC<ComponentProps> = ({
  images,
  startIndex,
  setStartIndex,
  setViewerIsOpen,
}) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const closeViewer = useCallback(() => {
    setStartIndex(0);
    setViewerIsOpen(false);
  }, [setStartIndex, setViewerIsOpen]);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  return (
    <S.Wrapper>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        thumbnailPosition={viewportWidth < md ? 'bottom' : 'left'}
        startIndex={startIndex}
      />
      <S.CloseButton onClick={() => closeViewer()}>
        <CloseOutline color={colors.white} />
      </S.CloseButton>
    </S.Wrapper>
  );
};

export default Component;
