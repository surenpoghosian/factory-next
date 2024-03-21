import Shape from '../shapes/Shape';
import  Circle from '@/components/shapes/Circle';
import  Square from '@/components/shapes/Square';  

export enum ShapeType {
  CIRCLE = 'CIRCLE',
  SQUARE = 'SQUARE',
}

export class ShapeFactory {
  static createShape(type: ShapeType) {
    switch (type) {
      case ShapeType.CIRCLE:
        return new Circle();
      case ShapeType.SQUARE:
        return new Square();
      default:
        throw new Error(`Unsupported shape type: ${type}`);
    }
  }
}