import { useState, useEffect, startTransition } from 'react';

const randomNumInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const parseNumber = (num: number, digits?: number): number => {
  return Number((num).toFixed(digits ?? 2));
};

const randomNumberRange = (config: Props, currentNumber?: number): number => {
  let shouldIncrease: boolean = Math.random() < 0.5;

  if (currentNumber === undefined) {
    return parseNumber(randomNumInRange(config.minValue, config.maxValue), config.digits);
  }

  const randomDouble: number = config.multiplyAdd ? (Math.random() * config.multiplyAdd) : Math.random();

  if (currentNumber + randomDouble >= config.maxValue) {
    return parseNumber((currentNumber - randomDouble), config.digits);
  }

  if (currentNumber - randomDouble <= config.minValue) {
    return parseNumber((currentNumber + randomDouble), config.digits);
  }

  if ((currentNumber + randomDouble) > config.maxValue) {
    shouldIncrease = false;
  }

  if ((currentNumber - randomDouble) < config.minValue) {
    shouldIncrease = true;
  }

  if (shouldIncrease) {
    return parseNumber((currentNumber + randomDouble), config.digits);
  }

  return parseNumber((currentNumber - randomDouble), config.digits);
};

interface Props {
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
}

/** Provides random number in specified range. Number is updated relative to previous number on set interval. Useful for mocking data like percentage metrics. */
const useRandomRange = (props: Props) => {
  const [number, setNumber] = useState<number>();

  useEffect(() => {
    const randomNumber: number = randomNumberRange(props);

    startTransition(() => {
      setNumber(randomNumber);
    });

    const interval = setInterval(() => {
      startTransition(() => {
        setNumber((currentNumber) => randomNumberRange(props, currentNumber));
      });
    }, props.updateInterval);

    return () => {
      clearInterval(interval);
    };

    /** Intentionally exclude props from dependency array as we never want to to re-run this effect. */
  }, []);

  return number;
};

export default useRandomRange;
