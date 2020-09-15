import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCheckSquare, faCoffee, faComment } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { Main } from './pages';

library.add( fab, faCheckSquare, faCoffee, faCheck, faComment );

export const App = () => {
  return (   
  <Main /> );
};
