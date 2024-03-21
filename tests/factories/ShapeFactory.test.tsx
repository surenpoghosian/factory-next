// components/factories/ShapeFactory.test.tsx
import { ShapeFactory, ShapeType } from '@/components/factories/ShapeFactory';
import Square from '@/components/shapes/Square';
import Circle from '@/components/shapes/Circle';


describe('ShapeFactory', () => {
  it('creates a Square shape', () => {
    // Arrange
    const square = ShapeFactory.createShape(ShapeType.SQUARE);
    
    // Assert
    expect(square instanceof Square).toBeTruthy();
  });

  it('creates a Circle shape', () => {
    // Arrange
    const circle = ShapeFactory.createShape(ShapeType.CIRCLE);
    
    // Assert
    expect(circle instanceof Circle).toBeTruthy();
  });
});