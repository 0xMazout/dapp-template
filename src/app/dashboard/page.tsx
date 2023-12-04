'use client';
import { usePrivy } from '@privy-io/react-auth';
import React from 'react';

const Dashboard = () => {
  const privy = usePrivy();
  return (
    <div className='p-5'>
      {privy.authenticated ? (
        `Succeed! you are connected to ${privy.user?.wallet?.address}`
      ) : (
        <button
          className='rounded-lg bg-violet-600 px-6 py-3 text-white hover:bg-violet-700'
          onClick={privy.login}
        >
          Log in
        </button>
      )}
    </div>
  );
};

export default Dashboard;
