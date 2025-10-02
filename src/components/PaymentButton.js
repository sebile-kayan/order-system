import React from 'react';
import { useCart } from '../context/CartContext';

const PaymentButton = () => {
  const { calculateTotal } = useCart();
  const total = calculateTotal();

  // Buton her zaman görünür olacak, sepet boş olsa bile
  return (
    <div 
      className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-40 flex items-center gap-2 font-medium"
    >
      <span className="text-xl">💳</span>
      <span className="hidden sm:inline">Toplam: ₺{total.toFixed(0)}</span>
      <span className="sm:hidden">₺{total.toFixed(0)}</span>
    </div>
  );
};

export default PaymentButton;
