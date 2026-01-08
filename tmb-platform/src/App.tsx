```javascript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Services from './pages/public/Services';
import MarketData from './pages/public/MarketData';
import Dashboard from './pages/portal/Dashboard';
import Login from './pages/portal/Login';
import AdminDashboard from './pages/portal/AdminDashboard';
import LicensingWizard from './pages/portal/LicensingWizard';
import MainLayout from './layouts/MainLayout';
import ChatBot from './components/ChatBot'; // Assuming ChatBot is in components folder

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="market" element={<MarketData />} />
                </Route>

                <Route path="/portal">
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="admin" element={<AdminDashboard />} />
                    <Route path="register" element={<LicensingWizard />} />
                </Route>
            </Routes>
            <ChatBot />
        </>
    );
}

export default App;
```
