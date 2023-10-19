// import Image from "next/image";
// import logo from "@/app/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        {/* <Image
          src={logo}
          alt="DecoVerse logo"
          width={30}
          height={30}
          priority
          placeholder="blur"
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
        >
          <path
            d="M4.81371 16.6192C2.6932 13.3062 2.46799 6.16663 9.21781 5.26044C13.8491 4.76839 20.1793 13.2057 20.9622 36.6803C21.7452 13.2057 28.0754 4.76839 32.7067 5.26044C39.4565 6.16663 39.2313 13.3062 37.1108 16.6192"
            stroke="#006B52"
            stroke-width="3.22462"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-xl normal-case">DecoVerse</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </nav>
  );
}
