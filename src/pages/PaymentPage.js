import React from 'react';
import { useCart } from '../context/CartContext';
import { useTable } from '../context/TableContext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { calculateTotal, cart } = useCart();
  const { tableInfo } = useTable();
  const navigate = useNavigate();
  const total = calculateTotal();

  const requestPayment = () => {
    alert('Ödeme isteği gönderildi! Garson masanıza gelecek.');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">💳</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Ödeme İsteği</h1>
          <p className="text-gray-600">Ödeme için çalışanı çağırmak istiyorsanız tıklayınız</p>
        </div>

        {tableInfo && (
          <div className="bg-orange-50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-600 mb-1">Masa</div>
            <div className="text-2xl font-bold text-orange-600">Masa {tableInfo.id}</div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-600 mb-1">Toplam Tutar</div>
          <div className="text-3xl font-bold text-gray-800">₺{total.toFixed(2)}</div>
        </div>

        <div className="space-y-3">
          <button
            onClick={requestPayment}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            🛎️ Çalışanı Çağır
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
          >
            Geri Dön
          </button>
        </div>

        {cart.length > 0 && (
          <div className="mt-6 text-sm text-gray-500">
            <p>Sepetinizde {cart.length} ürün bulunuyor</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
