// components/shapes/Circle.tsx
import Shape from './Shape';
import React, { ReactNode } from 'react';

class Circle extends Shape {
  draw(): ReactNode {
    return <div data-testid='selected-shape' className="w-20 h-20 bg-red-500 rounded-full"></div>;
  }
}

export default Circle;