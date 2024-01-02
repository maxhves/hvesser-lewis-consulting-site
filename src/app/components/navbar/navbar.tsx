import React from 'react';
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full p-5 flex justify-center sticky top-0 backdrop-blur-sm bg-old-lace bg-opacity-75">
      <div className="flex justify-between w-full lg:w-10/12">
        {/* Logo */}
        <div>
          <p className="text-tiber font-bold text-lg">MHL</p>
        </div>

        {/* Links */}
        <div className="hidden lg:block space-x-8 text-tiber text-sm">
          <Link href="/" className="hover:text-jungle-green"><span className="text-jungle-green">01.</span> About</Link>
          <Link href="/" className="hover:text-jungle-green"><span className="text-jungle-green">02.</span> Experience</Link>
          <Link href="/" className="hover:text-jungle-green"><span className="text-jungle-green">03.</span> Projects</Link>
          <Link href="/" className="hover:text-jungle-green"><span className="text-jungle-green">04.</span> Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;