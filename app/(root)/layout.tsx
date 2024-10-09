import React from 'react';

import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'





const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
        <div className="root-container">
            <div className="wrapper">
            {children}
 
            </div>
        </div>
        
           
      {/* layout */}
    </main>
  );
}

export default layout;
