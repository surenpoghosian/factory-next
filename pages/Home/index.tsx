'use client'
import React from 'react';
import { ShapeType, ShapeFactory } from '@/components/factories/ShapeFactory';


const HomePage = () => {
  const [selectedShape, setSelectedShape] = React.useState<ShapeType | null>(null);

  const drawShape = (shapeType: ShapeType) => {
    setSelectedShape(shapeType);
  };

  return (
    <div className='flex flex-col items-center w-128'>
      <h1 className='mb-4'>Shape Drawing App</h1>
      <div className="flex flex-col justify-around items-center mb-16">
        <button className='bg-gray-500 p-2 rounded-sm mb-4' onClick={() => drawShape(ShapeType.CIRCLE)}>Draw Circle</button>
        <button className='bg-gray-500 p-2 rounded' onClick={() => drawShape(ShapeType.SQUARE)}>Draw Square</button>
      </div>
      
      {selectedShape && (
        <div className='w-64 flex flex-col items-center justify-center'>
          <h2>Selected Shape</h2>
          {ShapeFactory.createShape(selectedShape).draw()}
        </div>
      )}
    </div>
  );
};

export default HomePage;
