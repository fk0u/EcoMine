import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// mencari element id root di dalam html buat tempat nempelin react-nya mah
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// inisialisasi root terus tampilin aplikasi utamanya mah di sini
// pake strict mode biar gampang nemu masalah pas lagi ngoding atuh
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);