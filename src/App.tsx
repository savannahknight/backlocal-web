import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  Router,
} from "react-router-dom";
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { AboutUs } from './app/containers/AboutUs';
// import { Contact } from './app/containers/Contact';
import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <AppContainer>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </AppContainer>
  );
}

export default App;
