import React from "react";

interface CurrencyFormatterProps {
  amount: number;
  currency: string;
}

export const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({
  amount,
  currency,
}) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
};
