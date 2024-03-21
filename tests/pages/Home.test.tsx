// pages/Home.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomePage from '@/pages/Home';

describe('HomePage', () => {
  it('renders the Home page with buttons', () => {
    // Act
    const { getByText } = render(<HomePage />);
    const drawCircleButton = getByText('Draw Circle');
    const drawSquareButton = getByText('Draw Square');
    
    // Assert
    expect(drawCircleButton).toBeInTheDocument();
    expect(drawSquareButton).toBeInTheDocument();
  });

  it('draws a Circle when "Draw Circle" button is clicked', () => {
    // Arrange
    const { getByText, getByTestId } = render(<HomePage />);
    const drawCircleButton = getByText('Draw Circle');
    
    // Act
    fireEvent.click(drawCircleButton);
    const selectedShape = getByTestId('selected-shape');
    
    // Assert
    expect(selectedShape).toHaveClass('w-20 h-20 bg-red-500 rounded-full');
  });

  it('draws a Square when "Draw Square" button is clicked', () => {
    // Arrange
    const { getByText, getByTestId } = render(<HomePage />);
    const drawSquareButton = getByText('Draw Square');
    
    // Act
    fireEvent.click(drawSquareButton);
    const selectedShape = getByTestId('selected-shape');
    
    // Assert
    expect(selectedShape).toHaveClass('w-20 h-20 bg-blue-500');
  });
});
