import { Page1 } from '@/pages/Page1';
import { Page2 } from '@/pages/Page2';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
};
