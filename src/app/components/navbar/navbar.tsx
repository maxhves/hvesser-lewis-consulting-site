import React from 'react';
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full bg-red-500 p-5 flex justify-center">
      <div className="flex justify-between w-full lg:w-11/12">
        {/* Logo */}
        <div>
          <h1>MHL</h1>
        </div>

        {/* Links */}
        <div className="space-x-8 hidden lg:block">
          <Link href="/"><span className="text-green-500">01.</span> About</Link>
          <Link href="/"><span className="text-green-500">02.</span> Experience</Link>
          <Link href="/"><span className="text-green-500">03.</span> Projects</Link>
          <Link href="/"><span className="text-green-500">04.</span> Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;