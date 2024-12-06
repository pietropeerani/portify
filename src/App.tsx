// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import getData, { Data } from './utils/getData';
import About from './pages/about/about';

const App: React.FC = () => {
  const [data, setData] = React.useState<Data | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async (owner: string, repo: string) => {
    try {
      const result = await getData(owner, repo);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home data={data} fetchData={fetchData} error={error} />} />
      <Route path="/:owner/:repo" element={<Home data={data} fetchData={fetchData} error={error} />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>Invalid Route</div>} />
    </Routes>
  );
};

export default App;
