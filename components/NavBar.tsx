// Alex Joshua (c) 2022

'use client'

import Link from 'next/link';
import '../styles/NavBar.css';
import { usePathname } from 'next/navigation';

const navOptions = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Loader',
    path: '/loader'
  },
  {
    name: 'Spin Loader',
    path: '/spinLoader'
  },
  {
    name: 'Split Text',
    path: '/splitText'
  },
  {
    name: 'Typing Animation',
    path: '/typingAnim'
  }
]

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="App flex justify-start top-0 w-full h-[6vh]">
      <nav className="h-full w-full max-w-[800px] flex justify-around gap-4 z-10 items-center text-sm font-light">
        {navOptions.map((option) => (
          <Link 
            key={option.name} 
            href={option.path} 
            className={`link hover:scale-105 ${pathname === option.path ? 'active' : 'non-active'}`}
          >
            {option.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
