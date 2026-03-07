import { createRoot } from 'react-dom/client'
import AppLayout from './AppLayout.tsx'
import './index.css'
import React from 'react';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
)
