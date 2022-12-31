import { useState, useEffect } from 'react';
import Button from './Button';
import formatMoney from '../helpers/formatMoney';
import totalPay from '../helpers/totalPay';

const Input = () => {
  const [quantity, setQuantity] = useState(10000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const resultTotalPay = totalPay(quantity, months);
    setTotal(resultTotalPay);
  }, [quantity, months]);

  useEffect(() => {
    setPayment(total / months);
  }, [total]);

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

  const handleChangeTerm = (e) => {
    setMonths(+e.target.value);
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
      <p className="text-stone-900 text-center my-10 text-5xl font-bold text-indigo-600">
        {formatMoney(quantity)}
      </p>
      <div>
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Choose a
          <span className="text-indigo-600"> term </span>
          to pay
        </h2>
        <select
          className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
          value={months}
          onChange={handleChangeTerm}
        >
          <option value="6">6 months</option>
          <option value="12">12 months</option>
          <option value="24">24 months</option>
        </select>
      </div>
      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font font-extrabold text-gray-500 text-center">
          Payment
          <span className="text-indigo-600"> summary</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {months}
          &nbsp;Months
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(total)}
          &nbsp;Total to pay
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(payment)}
          &nbsp;Monthly
        </p>
      </div>
    </>
  );
};

export default Input;
