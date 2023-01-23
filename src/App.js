import { Route, Routes } from 'react-router-dom';

import Favorites from './components/Favorites';
import BookPage from './components/BookPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookDisplay from './components/BookDisplay';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" element={<BookDisplay />} />;
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/favorites' element={<Favorites />} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App;
