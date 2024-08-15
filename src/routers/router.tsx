import { TestPage } from '@/pages/TestPage';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};
