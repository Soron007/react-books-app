import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookPage from './components/BookPage';
function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<BookList />} />;
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/favorites' element={<Favorites />} />


      </Routes>

    </div>
  );
}

export default App;
