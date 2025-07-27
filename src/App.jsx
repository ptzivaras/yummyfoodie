import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import DishList from './components/DishList';
import DishDetailPage from './components/DishDetailPage';
import OrderReview from './components/OrderReview';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<DishList />} />
            <Route path="/dishes/:id" element={<DishDetailPage />} />
            <Route path="/order" element={<OrderReview />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;