import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Layout components
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ToursList from './pages/tours/ToursList';
import TourDetails from './pages/tours/TourDetails';
import CreateTour from './pages/tours/CreateTour';
import VenuesList from './pages/venues/VenuesList';
import VenueDetails from './pages/venues/VenueDetails';
import Calendar from './pages/Calendar';
import ItineraryView from './pages/ItineraryView';
import BudgetManager from './pages/BudgetManager';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

// Guards
import PrivateRoute from './components/guards/PrivateRoute';
import PublicRoute from './components/guards/PublicRoute';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route element={<PublicRoute />}>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
            </Route>

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tours" element={<ToursList />} />
                <Route path="/tours/new" element={<CreateTour />} />
                <Route path="/tours/:id" element={<TourDetails />} />
                <Route path="/venues" element={<VenuesList />} />
                <Route path="/venues/:id" element={<VenueDetails />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/itinerary/:tourId" element={<ItineraryView />} />
                <Route path="/budget/:tourId" element={<BudgetManager />} />
                <Route path="/profile" element={<UserProfile />} />
              </Route>
            </Route>

            {/* Catch All */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;