import './App.css'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import DishList from './components/DishList';
import DishDetail from './components/DishDetail';
import DishDetailPage from './components/DishDetailPage'
import OrderReview from './components/OrderReview';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
      <Routes>
        <Route path="/" element={<DishList />} />
        {/* <Route path="/dishes/:id" element={<DishDetail />} /> */}
        {/* <Route path="/dishes/:id" element={<DishDetail />} /> */}
        <Route path="/dishes/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderReview />} />
      </Routes>
      </main>
    </div> 
  );
};
export default App;
