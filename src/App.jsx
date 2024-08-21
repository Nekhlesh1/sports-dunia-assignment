import React from 'react';
import CollegeTable from './CollegeTable';

const colleges = [
  { name: 'College A', rating: 4.5, fees: 10000, review: 300, featured: true },
  { name: 'College B', rating: 4.2, fees: 12000, review: 250, featured: false },
  { name: 'College C', rating: 3.8, fees: 15000, review: 180, featured: false },
  { name: 'College D', rating: 4.7, fees: 9000, review: 320, featured: true },
  { name: 'College E', rating: 4.0, fees: 13000, review: 210, featured: false },
  { name: 'College F', rating: 3.9, fees: 11000, review: 190, featured: false },
  { name: 'College G', rating: 4.1, fees: 16000, review: 240, featured: true },
  { name: 'College H', rating: 4.3, fees: 17000, review: 260, featured: false },
  { name: 'College I', rating: 4.6, fees: 14000, review: 310, featured: true },
  { name: 'College J', rating: 4.4, fees: 12000, review: 280, featured: false },
  { name: 'College K', rating: 4.5, fees: 13500, review: 290, featured: true },
  { name: 'College L', rating: 3.7, fees: 14500, review: 175, featured: false },
  { name: 'College M', rating: 4.2, fees: 9500, review: 230, featured: false },
  { name: 'College N', rating: 4.8, fees: 10500, review: 340, featured: true },
  { name: 'College O', rating: 4.0, fees: 11500, review: 200, featured: false },
  { name: 'College P', rating: 3.6, fees: 12500, review: 160, featured: false },
  { name: 'College Q', rating: 4.1, fees: 15500, review: 220, featured: true },
  { name: 'College R', rating: 4.7, fees: 16500, review: 330, featured: true },
  { name: 'College S', rating: 4.4, fees: 17500, review: 270, featured: false },
  { name: 'College T', rating: 4.2, fees: 18500, review: 250, featured: false },
  { name: 'College U', rating: 4.3, fees: 19500, review: 265, featured: true },
  { name: 'College V', rating: 4.0, fees: 20500, review: 215, featured: false },
  { name: 'College W', rating: 4.5, fees: 21500, review: 295, featured: true },
  { name: 'College X', rating: 4.6, fees: 22500, review: 310, featured: true },
  { name: 'College Y', rating: 4.1, fees: 23500, review: 240, featured: false },
  { name: 'College Z', rating: 3.9, fees: 24500, review: 200, featured: false },
  { name: 'College AA', rating: 4.3, fees: 25500, review: 260, featured: false },
  { name: 'College AB', rating: 4.7, fees: 26500, review: 320, featured: true },
  { name: 'College AC', rating: 4.2, fees: 27500, review: 255, featured: false },
  { name: 'College AD', rating: 4.0, fees: 28500, review: 210, featured: false },
  { name: 'College AE', rating: 4.5, fees: 29500, review: 300, featured: true },
  { name: 'College AF', rating: 3.8, fees: 30500, review: 180, featured: false },
  { name: 'College AG', rating: 4.6, fees: 31500, review: 310, featured: true },
  { name: 'College AH', rating: 4.1, fees: 32500, review: 240, featured: false },
  { name: 'College AI', rating: 4.0, fees: 33500, review: 220, featured: false },
  { name: 'College AJ', rating: 4.4, fees: 34500, review: 280, featured: true },
  { name: 'College AK', rating: 3.9, fees: 35500, review: 190, featured: false },
  { name: 'College AL', rating: 4.2, fees: 36500, review: 250, featured: false },
  { name: 'College AM', rating: 4.7, fees: 37500, review: 330, featured: true },
  { name: 'College AN', rating: 4.3, fees: 38500, review: 270, featured: false },
  { name: 'College AO', rating: 4.1, fees: 39500, review: 240, featured: true },
  { name: 'College AP', rating: 3.7, fees: 40500, review: 175, featured: false },
  { name: 'College AQ', rating: 4.5, fees: 41500, review: 295, featured: true },
  { name: 'College AR', rating: 4.6, fees: 42500, review: 310, featured: false },
  { name: 'College AS', rating: 4.0, fees: 43500, review: 215, featured: false },
  { name: 'College AT', rating: 4.4, fees: 44500, review: 280, featured: true },
  { name: 'College AU', rating: 3.8, fees: 45500, review: 180, featured: false },
  { name: 'College AV', rating: 4.2, fees: 46500, review: 255, featured: false },
  { name: 'College AW', rating: 4.3, fees: 47500, review: 265, featured: true },
  { name: 'College AX', rating: 4.7, fees: 48500, review: 330, featured: true },
];

function App() {
  return (
    <div className="App">
      <h1>College Directory</h1>
      <CollegeTable colleges={colleges} />
    </div>
  );
}

export default App;
