import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [userType, setUserType] = useState<'employee' | 'admin'>('employee');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const { login, switchRole } = useAuth();
  const navigate = useNavigate();

  const slides = [
    "Sign in to access your account and manage your services securely online.",
    "Secure, reliable access to your NAPSA services—anytime, anywhere.",
    "Managing your social security made simple and efficient.",
    "Your NAPSA information, delivered digitally with trust and convenience.",
    "A smarter way to access and manage your NAPSA benefits.",
    "Empowering members and employers through reliable digital services.",
    "Committed to efficient, transparent, and secure service delivery.",
    "Modern digital access designed to serve you better.",
    "Trusted social security services at your fingertips"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const toggleUserType = () => {
    setUserType(prev => prev === 'employee' ? 'admin' : 'employee');
    setIdentifier('');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(identifier, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials. Use one of the demo emails above or enter a valid email.');
    }
  };

  const handleQuickLogin = (role: 'ADMIN' | 'EMPLOYEE' | 'REAL_ESTATE' | 'ACTUARIAL' | 'FINANCE' | 'INVESTMENT' | 'OPERATIONS' | 'MEMBER_SERVICES') => {
    switchRole(role);
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Left Side - Login Form */}
      <div style={{
        width: '40%',
        backgroundColor: '#1B254B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        position: 'relative'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '400px',
          padding: '40px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          position: 'relative'
        }}>
          {/* Tab Badge */}
          <div
            onClick={toggleUserType}
            title="Click to Switch Role"
            style={{
              position: 'absolute',
              top: '-15px',
              left: '40px',
              backgroundColor: '#F59E0B',
              color: 'white',
              padding: '6px 24px',
              borderRadius: '8px 8px 0 0',
              fontWeight: 600,
              fontSize: '13px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
              userSelect: 'none'
            }}
          >
            {userType}
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '2px solid #1B254B',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              color: '#1B254B',
              fontSize: '20px'
            }}>
              <i className="fa-regular fa-user"></i>
            </div>
            <h2 style={{ color: '#1B254B', fontSize: '24px', fontWeight: 700 }}>
              {userType === 'employee' ? 'Employee Sign in' : 'Admin Sign in'}
            </h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#2D3748'
              }}>
                {userType === 'employee' ? 'NRC/PASSPORT' : 'EMAIL'}
              </label>
              <input
                type={userType === 'employee' ? 'text' : 'email'}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #2D3748',
                  borderRadius: '24px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                onBlur={(e) => e.target.style.borderColor = '#2D3748'}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#2D3748'
              }}>
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #2D3748',
                  borderRadius: '24px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                onBlur={(e) => e.target.style.borderColor = '#2D3748'}
                required
              />
            </div>

            {error && (
              <div style={{
                backgroundColor: '#FEE2E2',
                border: '1px solid #FCA5A5',
                color: '#DC2626',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                marginBottom: '16px'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#F59E0B',
                color: 'white',
                border: 'none',
                padding: '14px',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                marginTop: '10px',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D97706'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F59E0B'}
            >
              Sign in now
            </button>
          </form>

          {/* Demo Quick Login */}
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
            <p style={{ textAlign: 'center', fontSize: '11px', color: '#6B7280', marginBottom: '12px', fontWeight: 600 }}>
              DEMO DASHBOARD LOGIN
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={() => handleQuickLogin('ADMIN')}
                style={{
                  backgroundColor: '#8B5CF6',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7C3AED'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B5CF6'}
              >
                <i className="fa-solid fa-table-columns" style={{ marginRight: '4px' }}></i>
                Executive
              </button>
              <button
                onClick={() => handleQuickLogin('REAL_ESTATE')}
                style={{
                  backgroundColor: '#10B981',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
              >
                <i className="fa-solid fa-building" style={{ marginRight: '4px' }}></i>
                Real Estate
              </button>
              <button
                onClick={() => handleQuickLogin('ACTUARIAL')}
                style={{
                  backgroundColor: '#F59E0B',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D97706'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F59E0B'}
              >
                <i className="fa-solid fa-chart-line" style={{ marginRight: '4px' }}></i>
                Actuarial
              </button>
              <button
                onClick={() => handleQuickLogin('FINANCE')}
                style={{
                  backgroundColor: '#EF4444',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#EF4444'}
              >
                <i className="fa-solid fa-calculator" style={{ marginRight: '4px' }}></i>
                Finance
              </button>
              <button
                onClick={() => handleQuickLogin('INVESTMENT')}
                style={{
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
              >
                <i className="fa-solid fa-chart-pie" style={{ marginRight: '4px' }}></i>
                Investment
              </button>
              <button
                onClick={() => handleQuickLogin('OPERATIONS')}
                style={{
                  backgroundColor: '#8B5CF6',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7C3AED'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B5CF6'}
              >
                <i className="fa-solid fa-hand-holding-dollar" style={{ marginRight: '4px' }}></i>
                Operations
              </button>
              <button
                onClick={() => handleQuickLogin('MEMBER_SERVICES')}
                style={{
                  backgroundColor: '#06B6D4',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0891B2'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#06B6D4'}
              >
                <i className="fa-solid fa-globe" style={{ marginRight: '4px' }}></i>
                Member Services
              </button>
              <button
                onClick={() => handleQuickLogin('EMPLOYEE')}
                style={{
                  backgroundColor: '#6B7280',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4B5563'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6B7280'}
              >
                <i className="fa-solid fa-user" style={{ marginRight: '4px' }}></i>
                Member Portal
              </button>
            </div>
          </div>

          {/* Sign up link */}
        {/*  <div style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '12px',
            color: '#2D3748'
          }}>
            Don't have an account ? <b style={{ color: '#F59E0B', cursor: 'pointer' }}>Sign up now .</b>
          </div> */}
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div style={{
        width: '60%',
        backgroundImage: 'url(/images/african-american-business-woman-with-laptop%201.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        position: 'relative'
      }}>
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, rgba(27, 37, 75, 0.9), transparent)'
        }}></div>

        {/* NAPSA Logo Badge */}
        <div style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'white',
          padding: 0,
          overflow: 'hidden',
          border: '4px solid white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 20
        }}>
          <img 
            src="/images/Group%2030%20(1).jpg" 
            alt="NAPSA Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>

        {/* Overlay Text with Slides */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          right: '40px',
          color: 'white',
          zIndex: 10,
          background: 'rgba(27, 37, 75, 0.85)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '16px'
        }}>
          <div style={{
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {slides[currentSlide]}
          </div>
          <div style={{
            marginTop: '16px',
            display: 'flex',
            gap: '6px',
            justifyContent: 'center'
          }}>
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'white',
                  borderRadius: '50%',
                  opacity: currentSlide === index ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 0.3s'
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
