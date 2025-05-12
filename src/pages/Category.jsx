import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Category from '../pages/Category';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:categoryId" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
