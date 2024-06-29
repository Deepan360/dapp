import { useState } from "react";

export const Cart = () => {
  const [CartCount, SetCartcount] = useState(0);
  return (
    <div>
      <h1>this is the cart{CartCount + 1}</h1>
    </div>
  );
};
