import React from 'react';
import { LargeSpinner } from './examples/LargeSpinner';
import { RegularSpinner } from './examples/RegularSpinner';
import { SmoothSpinner } from './examples/SmoothSpinner';

import { PageWrapper } from './PageWrapper';

function App() {
  return (
    <PageWrapper>
      <RegularSpinner />
      <LargeSpinner />
      <SmoothSpinner />
    </PageWrapper>

  );
}

export default App;
