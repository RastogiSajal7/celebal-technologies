import React from 'react';
import Nav from '../components/Nav';
import Yev from '../components/Yev';
import Portfolio from '../components/Portfolio';
import { useStateContext } from '../contexts/ContextProvider';

function Dashboard() {
  const { myState } = useStateContext();

  return (
    <div className='grid grid-cols-12'>
      <div className="col-span-12 md:col-span-1"><Nav /></div>
      <div className="col-span-12 md:col-span-3 order-2"><Yev /></div>
      <div className="col-span-12 md:col-span-8 order-last">
        <div>
          {myState.selectedComponent ? myState.selectedComponent : <Portfolio />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
