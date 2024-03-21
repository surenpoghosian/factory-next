// components/shapes/Square.tsx
import Shape from './Shape';
import React, { ReactNode } from 'react';

class Square extends Shape {
  draw(): ReactNode {
    return <div data-testid='selected-shape' className="w-20 h-20 bg-blue-500"></div>;
  }
}

export default Square;