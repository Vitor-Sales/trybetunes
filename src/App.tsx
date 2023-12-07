import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Album from './pages/Album';
import Search from './pages/Search';
import NotFound from './pages/NotFound/NotFound';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
