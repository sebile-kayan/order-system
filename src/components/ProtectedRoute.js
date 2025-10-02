import React from 'react';
import { useTable } from '../context/TableContext';

const ProtectedRoute = ({ children }) => {
  const { isSessionActive, isLoading } = useTable();

  // Yükleniyor durumunda loading göster
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Masa bilgileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Oturum yoksa mock oturum başlat
  if (!isSessionActive()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Masa oturumu başlatılıyor...</p>
        </div>
      </div>
    );
  }

  // Oturum varsa children'ı render et
  return children;
};

export default ProtectedRoute;
