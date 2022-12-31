const totalPay = (quantity, months) => {
  let total;

  if (quantity < 5000) {
    total = quantity * 1.5;
  } else if (quantity >= 5000 && quantity < 10000) {
    total = quantity * 1.4;
  } else if (quantity >= 1000 && quantity < 15000) {
    total = quantity * 1.3;
  } else {
    total = quantity * 1.2;
  }

  if (months === 6) {
    total *= 1.1;
  } else if (months === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
};

export default totalPay;
