import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth-store';
import { Utensils, LogOut, PlusCircle, Shield } from 'lucide-react';

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-orange-600">
          <Utensils className="w-6 h-6" />
          <span>CulinaryBlog</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-orange-600 transition">Trang chủ</Link>
          <Link to="/recipes" className="hover:text-orange-600 transition">Công thức</Link>
          <Link to="/categories" className="hover:text-orange-600 transition">Danh mục</Link>
        </nav>

        <div className="flex items-center gap-4">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/recipes/create"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition"
              >
                <PlusCircle className="w-4 h-4" />
                Đăng bài
              </Link>

              {user.roles?.includes('Admin') && (
                <Link to="/admin" className="p-2 text-gray-600 hover:text-orange-600" title="Quản trị">
                  <Shield className="w-5 h-5" />
                </Link>
              )}

              <div className="flex items-center gap-2 border-l pl-3">
                <span className="text-sm font-medium text-gray-800">{user.fullName || user.userName}</span>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-gray-500 hover:text-red-600 transition"
                  title="Đăng xuất"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-orange-600">
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition"
              >
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};