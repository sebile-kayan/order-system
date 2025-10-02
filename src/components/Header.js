import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTable } from "../context/TableContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const { tableInfo, sessionInfo, endSession } = useTable();
  const cartItemCount = getCartItemCount();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const goToMenu = () => {
    navigate('/');
    closeMobileMenu();
  };
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bg-white shadow-md">
      <div className="flex items-center gap-2 md:gap-4">
        {/* Hamburger Menü - Modern ve kenara yakın */}
        <button
          onClick={toggleMobileMenu}
          className="p-1.5 -ml-1 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 group"
          aria-label="Menüyü Aç"
        >
          <div className="w-4 h-4 flex flex-col justify-center space-y-1">
            <div className={`h-0.5 w-4 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'group-hover:scale-110'}`}></div>
            <div className={`h-0.5 w-4 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'group-hover:scale-110'}`}></div>
            <div className={`h-0.5 w-4 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'group-hover:scale-110'}`}></div>
          </div>
        </button>

        {/* Logo ve İkon - Tıklanabilir */}
        <button 
          onClick={goToMenu}
          className="flex items-center gap-2 md:gap-3 hover:bg-orange-50 rounded-lg px-2 py-1 transition-colors duration-200 group"
        >
          <div className="w-7 h-7 md:w-9 md:h-9 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-200">
            <span className="text-white text-base md:text-lg font-bold">🍽️</span>
          </div>
          <h1 className="text-base md:text-xl font-bold text-gray-800 m-0 font-sans group-hover:text-orange-600 transition-colors duration-200">EsSe</h1>
        </button>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile - Sadece Sepet ve Masa Bilgisi */}
        <div className="flex sm:hidden items-center gap-2">
          <Link 
            to="/cart" 
            className="flex items-center gap-1 text-gray-600 hover:text-orange-600 px-2 py-1 rounded-lg transition-colors duration-200 relative"
          >
            <span className="text-lg">🛒</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Masa Bilgisi - Mobile */}
          {tableInfo && (
            <Link 
              to="/payment"
              className="text-xs text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              <span className="font-semibold">M{tableInfo.id} Ödeme İste</span>
            </Link>
          )}
        </div>

        {/* Desktop Menü - Responsive */}
        <div className="hidden sm:flex items-center gap-2 md:gap-4">
          {/* Masa Bilgisi - Desktop */}
          {tableInfo && (
            <Link 
              to="/payment"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              <span className="font-semibold">Masa {tableInfo.id} Ödeme İste</span>
            </Link>
          )}

          {/* Sipariş Takibi */}
          <Link 
            to="/orders" 
            className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-orange-600 px-2 md:px-3 py-1 md:py-2 rounded-lg transition-colors duration-200"
          >
            <span className="text-sm md:text-base font-medium">Siparişlerim</span>
          </Link>

          {/* Sepet */}
          <Link 
            to="/cart" 
            className="relative flex items-center gap-1 md:gap-2 bg-orange-500 text-white px-3 md:px-5 py-2 md:py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-orange-600"
          >
            <span className="text-base md:text-lg">🛒</span>
            <span className="text-sm md:text-base">Sepet</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-6 md:w-6 flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Çıkış */}
          {tableInfo && (
            <button
              onClick={endSession}
              className="flex items-center gap-1 md:gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-2 md:px-3 py-1 md:py-2 rounded-lg transition-colors duration-200"
            >
              <span className="text-base md:text-lg">❌</span>
              <span className="text-sm md:text-base font-medium">Çıkış</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menü</h2>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Masa Bilgisi */}
        {tableInfo && (
          <div className="px-6 py-4 bg-orange-50 border-b border-gray-200">
            <div className="text-sm font-semibold text-gray-800">Masa {tableInfo.id}</div>
            <div className="text-xs text-gray-500">Aktif Oturum</div>
          </div>
        )}

        {/* Menü Linkleri */}
        <div className="py-4">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
          >
            <span className="text-2xl">🍽️</span>
            <div>
              <div className="font-semibold text-lg">Menü</div>
              <div className="text-sm text-gray-500">Yemekleri görüntüle</div>
            </div>
          </Link>

          <Link
            to="/orders"
            onClick={closeMobileMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
          >
            <span className="text-2xl">📋</span>
            <div>
              <div className="font-semibold text-lg">Siparişlerim</div>
              <div className="text-sm text-gray-500">Sipariş durumunu takip et</div>
            </div>
          </Link>

          <Link
            to="/cart"
            onClick={closeMobileMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
          >
            <span className="text-2xl">🛒</span>
            <div className="flex-1">
              <div className="font-semibold text-lg">Sepet</div>
              <div className="text-sm text-gray-500">Siparişi tamamla</div>
            </div>
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
        </Link>
        </div>

        {/* Çıkış Butonu */}
        {tableInfo && (
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
            <button
              onClick={() => {
                endSession();
                closeMobileMenu();
              }}
              className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 w-full text-left rounded-lg"
            >
              <span className="text-2xl">🚪</span>
              <div>
                <div className="font-semibold text-lg">Oturumu Sonlandır</div>
                <div className="text-sm text-gray-500">Çıkış yap</div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;

