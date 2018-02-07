import React, { Component } from 'react';
import TopFiveQuotesPanel from './TopFiveQuotesPanel';
import StickyMenuBar from './StickyMenuBar';
import QuotesPanel from './QuotesPanel';

class App extends Component {
  render() {
    return (
      <div>
        <StickyMenuBar></StickyMenuBar>
        <TopFiveQuotesPanel></TopFiveQuotesPanel>
        <QuotesPanel></QuotesPanel>
      </div>
    );
  }
}

export default App;
