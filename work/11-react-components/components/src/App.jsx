import { useState, useRef } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TextPage from './TextPage';
import CardPage from './CardPage';
import PanelPage from './PanelPage';
import Model from './Model';
import Button from './Button';
import RegisterForm from './RegisterForm';


function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState('text'); // 'text', 'card', 'panel'

  const [pageContent, setPageContent] = useState('Initial Content');



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };



  const modalRef = useRef();

  return (
    <>
      <Header handlePageChange={handlePageChange} />

      <div>

        <Button type="button" visual="button" >
          Click me ( Test Button)
        </Button>

      </div>

      <div>
        {currentPage === 'text' && <TextPage />}
        {currentPage === 'card' && <CardPage onPageChange={handlePageChange} />}
        {currentPage === 'panel' && <PanelPage />}



        <Model someRef={modalRef}>
          <RegisterForm />
        </Model>
      </div>

      <Footer />
    </>
  )
}

export default App;
