import { LoginPage } from '@/pages/LoginPage';
import { OnboardPage } from '@/pages/OnboardPage';
import { TestPage } from '@/pages/TestPage';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/onboard" element={<OnboardPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
