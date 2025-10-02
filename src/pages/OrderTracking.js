import React, { useState, useEffect } from 'react';

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simüle edilmiş sipariş verileri
  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        orderNumber: 'Sipariş-001',
        items: [
          { name: 'Margherita Pizza', quantity: 1, status: 'ready' },
          { name: 'Cola', quantity: 2, status: 'served' }
        ],
        total: 120.00,
        status: 'preparing',
        createdAt: new Date(Date.now() - 15 * 60 * 1000), // 15 dakika önce
        estimatedTime: 20
      },
      {
        id: 2,
        orderNumber: 'Sipariş-002',
        items: [
          { name: 'Cheeseburger', quantity: 1, status: 'preparing' },
          { name: 'Fanta', quantity: 1, status: 'pending' }
        ],
        total: 85.00,
        status: 'preparing',
        createdAt: new Date(Date.now() - 5 * 60 * 1000), // 5 dakika önce
        estimatedTime: 15
      }
    ];

    setTimeout(() => {
      setOrders(mockOrders);
      setIsLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-green-100 text-green-800';
      case 'served': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Beklemede';
      case 'preparing': return 'Hazırlanıyor';
      case 'ready': return 'Hazır';
      case 'served': return 'Servis Edildi';
      default: return 'Bilinmiyor';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Siparişler yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sipariş Takibi</h2>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Henüz siparişiniz bulunmuyor.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{order.orderNumber}</h3>
                    <p className="text-sm text-gray-500">
                      {order.createdAt.toLocaleString('tr-TR')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Tahmini süre: {order.estimatedTime} dk
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{item.quantity}x</span>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-lg font-bold text-orange-600">
                    Toplam: ₺{order.total.toFixed(2)}
                  </span>
                  {order.status === 'ready' && (
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                      ✅ Hazır
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default OrderTracking;
