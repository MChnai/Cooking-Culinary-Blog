import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          
          {/* Protected Routes cho User đã Auth */}
          <Route element={<ProtectedRoute />}>
            <Route path="recipes/create" element={<div>Trang Tạo Công Thức Tĩnh</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}