import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Spinner } from '../components/Spinner';
import { StartStopButtons } from '../components/StartStopButtons';

test('renders a spinner with no value', () => {
  render(<Spinner value={0} />);
  const zeroPercentText = screen.getByText(/0%/i);
  expect(zeroPercentText).toBeInTheDocument();
});

test('clicking start button calls click handler', () => {
  const clickHandler = jest.fn();
  render(
    <StartStopButtons onClickStart={clickHandler} onClickStop={clickHandler} isActive={false} />,
  );
  const startButton = screen.getByText('Start');
  expect(startButton).toBeInTheDocument();
  fireEvent.click(startButton);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});

test('active state disables start button', () => {
  const clickHandler = jest.fn();
  render(<StartStopButtons onClickStart={clickHandler} onClickStop={clickHandler} isActive />);
  const startButton = screen.getByText('Start').closest('button');
  expect(startButton).toBeInTheDocument();
  expect(startButton).toBeDisabled();
});
