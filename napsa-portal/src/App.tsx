import { Routes, Route } from 'react-router-dom';
import NapsaPrototype from './pages/NapsaPrototype';
import AdminDashboardLegacy from './pages/AdminDashboardLegacy';
import MobileCalculator from './pages/MobileCalculator';
// Import existing TMB layouts/pages just to avoid errors? No, this is NAPSA only.

function App() {
    return (
        <Routes>
            <Route path="/" element={<NapsaPrototype />} />
            <Route path="/napsa-prototype" element={<NapsaPrototype />} />
            <Route path="/admin-dashboard" element={<AdminDashboardLegacy />} />
            <Route path="/mobile-calculator" element={<MobileCalculator />} />
        </Routes>
    );
}

export default App;