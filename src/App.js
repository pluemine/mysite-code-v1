import React, { useState, useLayoutEffect, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

import BottomNavBar from './components/BottomNavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import TopGroupBar from './components/TopGroupBar';

import { footer, accentList } from './data/Global';
import { hero, shortcut_list, skill_data } from './data/Home';
import { profile_data } from './data/Profile';
import { portfolio_data } from './data/Portfolio';
import { settings_data } from './data/Settings';
import { blog_data } from './data/Blog';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [themeColor, setThemeColor] = useState();
  const [themeMode, setThemeMode] = useState('default');
  const [accentColor, setAccentColor] = useState(0);
  const [page, setPage] = useState();
  const [localConsent, setLocalConsent] = useState(0);

  const handleClickScroll = (x) => {
    const element = document.getElementById(x);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  var e = window.matchMedia('(prefers-color-scheme: dark)');

  const chkdefault = useCallback(
    (x) => {
      if (localConsent === 1) {
        if (x.matches && localStorage.getItem('theme') === 'default') {
          setThemeColor('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (!x.matches && localStorage.getItem('theme') === 'default') {
          setThemeColor('light');
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } else {
        if (x.matches) {
          setThemeColor('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (!x.matches) {
          setThemeColor('light');
          document.documentElement.setAttribute('data-theme', 'light');
        }
      }
    },
    [localConsent, setThemeColor]
  );

  const setNewThemeMode = useCallback(
    (value) => {
      if (localConsent === 1) {
        localStorage.setItem('theme', value);
      }
      setThemeMode(value);
      if (value !== 'default') {
        setThemeColor(value);
        e.removeEventListener('change', chkdefault);
        document.documentElement.setAttribute('data-theme', value);
      } else {
        e.addEventListener('change', chkdefault);
        chkdefault(e);
      }
    },
    [localConsent, setThemeMode, setThemeColor, e, chkdefault]
  );

  const setNewAccentColor = useCallback(
    (value) => {
      if (localConsent === 1) {
        localStorage.setItem('accent', value);
      }
      setAccentColor(value);
    },
    [localConsent, setAccentColor]
  );

  useLayoutEffect(() => {
    const currentConsent = localStorage.getItem('consent')
      ? parseInt(localStorage.getItem('consent'))
      : null;
    if (currentConsent === 1) {
      setLocalConsent(1);
    }

    if (currentConsent === 1) {
      const currentTheme = localStorage.getItem('theme')
        ? localStorage.getItem('theme')
        : null;
      if (currentTheme === 'light' || currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', currentTheme);
        setNewThemeMode(currentTheme);
      } else {
        setNewThemeMode(themeMode);
      }
    } else {
      setNewThemeMode(themeMode);
    }

    if (currentConsent === 1) {
      const currentAccent = localStorage.getItem('accent')
        ? parseInt(localStorage.getItem('accent'))
        : null;
      if (
        currentAccent &&
        currentAccent >= 0 &&
        currentAccent < accentList.length
      ) {
        setNewAccentColor(currentAccent);
      } else {
        setNewAccentColor(accentColor);
      }
    } else {
      setNewAccentColor(accentColor);
    }

    window.addEventListener('resize', resizeScreenWidth);
    resizeScreenWidth(screenWidth);
  }, [screenWidth, setNewThemeMode, themeMode, setNewAccentColor, accentColor]);

  const handleChange_setThemeMode = (event) => {
    setNewThemeMode(event);
  };

  const handleChange_setAccentColor = (event) => {
    setNewAccentColor(event);
  };

  const handleChange_setLocalConsent = (event) => {
    setLocalConsent(event);
    localStorage.setItem('consent', event);
  };

  function colorNow() {
    return themeColor === 'dark'
      ? accentList[accentColor].color[400]
      : accentList[accentColor].color[600];
  }

  function accentBackgroundColorNow() {
    return themeColor === 'dark'
      ? accentList[accentColor].bgdark
      : accentList[accentColor].bglight;
  }

  const theme = createTheme({
    palette: {
      mode: themeColor,
      primary: {
        main: colorNow(),
      },
      secondary: {
        main: accentBackgroundColorNow(),
      },
    },
  });

  function resizeScreenWidth(x) {
    setScreenWidth(window.innerWidth);
  }

  return (
    <div className='body'>
      <ThemeProvider theme={theme}>
        <HashRouter scrollIndicatorInsets={{ right: 1 }}>
          <ScrollToTop />
          <ScrollToTopButton screenWidth={screenWidth} />
          <TopGroupBar
            page={page}
            screenWidth={screenWidth}
            themeMode={themeMode}
            localConsent={localConsent}
            handleChange_setLocalConsent={handleChange_setLocalConsent}
          />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Home
                  setPage={setPage}
                  handleClickScroll={handleClickScroll}
                  hero={hero}
                  shortcut_list={shortcut_list}
                  skill_data={skill_data}
                  portfolio_data={portfolio_data}
                />
              }
            />
            <Route
              exact
              path='/profile'
              element={
                <Profile
                  setPage={setPage}
                  handleClickScroll={handleClickScroll}
                  profile_data={profile_data}
                />
              }
            />
            <Route
              exact
              path='/portfolio'
              element={
                <Portfolio setPage={setPage} portfolio_data={portfolio_data} />
              }
            />
            <Route
              exact
              path='/blog'
              element={<Blog setPage={setPage} blog_data={blog_data} />}
            />
            <Route
              exact
              path='/blog/:id'
              element={<BlogPage setPage={setPage} blog_data={blog_data} />}
            />
            <Route
              exact
              path='/settings'
              element={
                <Settings
                  setPage={setPage}
                  themeMode={themeMode}
                  accentColor={accentColor}
                  localConsent={localConsent}
                  handleChange_setThemeMode={handleChange_setThemeMode}
                  handleChange_setAccentColor={handleChange_setAccentColor}
                  handleChange_setLocalConsent={handleChange_setLocalConsent}
                  settings_data={settings_data}
                />
              }
            />
            <Route path='*' element={<NotFound setPage={setPage} />} />
          </Routes>
          <Footer footer={footer} />
          <BottomNavBar page={page} screenWidth={screenWidth} />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
