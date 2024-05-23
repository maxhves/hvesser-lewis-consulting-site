import React from 'react';
import {clsx} from "clsx";

//region Container

export function NavigationBar({children}: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full h-16 fixed top-0 border-b border-alabaster/5">
        <div className="h-full flex flex-col mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 justify-center">
          <div className="flex flex-row items-center justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

//endregion

//region Drawer

export function NavigationBarDrawer({children, open}: { children: React.ReactNode, open: boolean }) {
  return (
    <div className="fixed sm:hidden w-full mt-16 pointer-events-none">
      <nav className={clsx(
        open ? "translate-y-0" : "-translate-y-20",
        "flex-col transition-transform duration-300 ease-in-out pointer-events-none bg-cinder border-b border-alabaster/5 px-2 py-4"
      )}>
        {children}
      </nav>
    </div>
  )
}

//endregion