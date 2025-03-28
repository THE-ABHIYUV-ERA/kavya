import { Routes, Route } from 'react-router-dom';
import Index from './Components/Index/Index';
// import Started from './Components/Started/Started';
// import Admin from './Components/Admin/Admin';

const App = () => {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Index />} />

      {/* Get Started Page */}
      {/* <Route path="/get-started" element={<Started />} /> */}

      {/* Admin setup */}
      {/* <Route path="/admin/*" element={<Admin />} /> {/* Admin Routes */}  
    </Routes>
  );
};

export default App;
