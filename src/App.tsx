import { styled } from '@stitches/react';
import ProgressBar from './ProgressBar';
import useRandomRange from './useRandomRange';

const propsDocumentation: string = `interface Props {
  /** Min value for the number. */
  minValue: number

  /** Max value for the number. */
  maxValue: number

  /** Update interval in milliseconds. */
  updateInterval?: number

  /** The maximum number of digits after the decimal point. */
  digits?: number

  /** Multiple the next addition (0.00 - 0.99) number with this. */
  multiplyAdd?: number
}`;

const Box = styled('div');

function App() {
  const example1 = useRandomRange({ minValue: 28, maxValue: 37, updateInterval: 1000, digits: 2, multiplyAdd: 4 });

  const example2 = useRandomRange({ minValue: 10, maxValue: 90, updateInterval: 1000, digits: 2, multiplyAdd: 10 });

  const example3 = useRandomRange({ minValue: 5, maxValue: 90, updateInterval: 500, digits: 4, multiplyAdd: 10 });

  return (
    <Wrapper>
      <AppTitle>
        useRandomRange hook
      </AppTitle>
      {'Provides random number in specified range. Number is updated relative to previous number on set interval. Useful for mocking data like percentage metrics.'}
      <SectionTitle>options</SectionTitle>
      <Code>{propsDocumentation}</Code>
      <SectionTitle>example</SectionTitle>
      <ExampleContainer>
        <Title>Example 1 - fixed range (28 - 37)</Title>
        <code>{'const example1 = useRandomRange({ minValue: 28, maxValue: 37, updateInterval: 1000, digits: 2, multiplyAdd: 4 });'}</code>
        <ProgressBarWrapper>
          <ProgressBarText>
            {example1}%
          </ProgressBarText>
          <ProgressBar percent={example1} />
        </ProgressBarWrapper>
      </ExampleContainer>
      <ExampleContainer>
        <Title>Example 2 - higher addition number</Title>
        <code>{'const example2 = useRandomRange({ minValue: 10, maxValue: 90, updateInterval: 1000, digits: 2, multiplyAdd: 10 });'}</code>
        <ProgressBarWrapper>
          <ProgressBarText>
            {example2}%
          </ProgressBarText>
          <ProgressBar percent={example2} />
        </ProgressBarWrapper>
      </ExampleContainer>
      <ExampleContainer>
        <Title>Example 3 - higher update interval</Title>
        <code>{'const example3 = useRandomRange({ minValue: 5, maxValue: 90, updateInterval: 500, digits: 4, multiplyAdd: 10 });'}</code>
        <ProgressBarWrapper>
          <ProgressBarText>
            {example3}%
          </ProgressBarText>
          <ProgressBar percent={example3} />
        </ProgressBarWrapper>
      </ExampleContainer>
      <SectionTitle>usage</SectionTitle>
      <Box>
        Copy
        {' '}
        <a href='https://github.com/x7ci/use-random-range/blob/main/src/useRandomRange.ts'>
          <code>
            useRandomRange.ts
          </code>
        </a>
        {' '}
        to your React project - the custom hook is written in TypeScript and has no dependencies.
      </Box>
    </Wrapper>
  );
}

const AppTitle = styled('div', {
  fontSize: 40,
  fontWeight: 'bold',
});

const SectionTitle = styled('div', {
  fontSize: 24,
  fontWeight: 'bold',
});

const Code = styled('code', {
  display: 'block',
  whiteSpace: 'pre-wrap'
});

const Wrapper = styled('div', {
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

const ExampleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: 'lavender',
  maxWidth: '1000px',
  padding: 20,
  gap: 8,

});

const ProgressBarWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: 400,
});

const ProgressBarText = styled('span', {
  width: 150,
});

const Title = styled('div', {
  fontStyle: 'italic',
});

export default App;
