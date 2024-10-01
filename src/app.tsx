import { createRoot } from 'react-dom/client';
import { Button } from '@/components/ui/button';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<Button>Click me</Button>);
