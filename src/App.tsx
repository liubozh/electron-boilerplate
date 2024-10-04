import { createRoot } from 'react-dom/client';
import RootLayout from '@/layout';
import HomePage from '@/app/HomePage';
import TitleBar from '@/components/TitleBar';

export default function App() {
  return (
    <RootLayout>
      <TitleBar />
      <HomePage />
    </RootLayout>
  );
}

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<App />);
