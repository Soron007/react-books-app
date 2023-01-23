import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookPage from './components/BookPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" element={<BookList />} />;
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/favorites' element={<Favorites />} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App;
