import { useState } from 'react';
import Button from './Button';

const Input = () => {
  const [quantity, setQuantity] = useState(10000);

  const min = 0;
  const max = 20000;
  const step = 100;

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleClickDecrement = () => {
    const value = quantity - step;

    return value < min ? value === min : setQuantity(value);
  };

  const handleClickIncrement = () => {
    const value = quantity + step;

    return value > max ? value === max : setQuantity(value);
  };

  return (
    <>
      <div className="flex justify-between my-6">
        <Button
          operator="-"
          fn={handleClickDecrement}
        />
        <Button
          operator="+"
          fn={handleClickIncrement}
        />
      </div>
      <input
        type="range"
        className="h-6 bg-blue-100 accent-lime-500 hover:accent-lime-400"
        onChange={handleChange}
        value={quantity}
        min={min}
        max={max}
        step={step}
      />
      <p className="text-stone-900 text-center my-10 text-5xl font-bold text-indigo-600">{quantity}</p>
    </>
  );
};

export default Input;
