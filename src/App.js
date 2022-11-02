import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className='mx-auto max-w-screen-xl' data-theme="bumblebee">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
