import { BasketContainer } from './components/BasketContainer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Box, CssBaseline } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [isCardOpen,setCardOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
        <Box color={'secondary'} sx={{ minHeight: '100vh', padding: '50px' }}>
          <Header 
          openCart={()=>setCardOpen(true)}
          />
          <Main />
        </Box>
        <BasketContainer
         cartOpen={isCardOpen}
          closeCart={()=>setCardOpen(false)}
        />
    </React.Fragment>
  );
}

export default App;
