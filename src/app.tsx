import './index.css';
import { createRoot } from 'react-dom/client';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1 className="text-3xl font-bold underline">Hello from React!</h1>);
