import React from "react";
import Image from "next/image";
import { UserCircle } from "lucide-react";

function Header({isRegistering, setIsRegistering}) {
  return (
    <header className="flex items-center justify-between mx-[100px] mt-[40px]">
      <Image
        src="/main-logo.svg"
        alt="main-logo logo"
        width={324}
        height={90}
        priority
      />
      <div className="flex items-center gap-5">
        <nav>
          <ul className="flex gap-5">
            <li>About SGLR</li>
            <li>Institutes</li>
            <li>How it Works?</li>
          </ul>
        </nav>
        <button onClick={() => setIsRegistering(!isRegistering)} className="flex items-center gap-1 bg-green-500 text-white px-4 py-3 rounded-lg">
            <UserCircle/>
            {
                isRegistering ? "Login" : "Register"
            }
        </button>
        <div className="p-1 px-2.5 border rounded-full">
          മ
        </div>
      </div>
    </header>
  );
}

export default Header;
