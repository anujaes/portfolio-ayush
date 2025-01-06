import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// page Routes
import { Routs } from './routes/routs';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
    return (
        <ParallaxProvider>
        <BrowserRouter basename='/'>
                <Routes>
                    {Routs.map((page) => (
                        <Route key={page.element} path={page.path} element={page.element} />
                    ))}
                </Routes>
            </BrowserRouter>
        </ParallaxProvider>
    );
}

export default App;
