import { Route, Routes } from 'react-router';
import Main from './components/Main';
import SearchForAddress from './components/SearchForAddress';
import SearchForCEP from './components/SearchForCEP';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/BuscarEndereco" element={<SearchForAddress />} />
      <Route path="/BuscarCEP" element={<SearchForCEP />} />
    </Routes>
  );
}

export default App;
