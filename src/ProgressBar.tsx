import { styled } from '@stitches/react';

interface Props {
  percent?: number
}

const ProgressBar = ({ percent }: Props) => {
  return (
    <Wrapper>
      <FilledProgress
        css={{ width: `${percent}%`, backgroundColor: '#000' }}
      />
    </Wrapper >
  );
};

const Wrapper = styled('div', {
  width: '100%',
  backgroundColor: '#fff',
  height: '10px',
});

const FilledProgress = styled('div', {
  height: '10px',
  transition: 'width 300ms ease-out',
});

export default ProgressBar;
