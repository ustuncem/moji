import {useState, useCallback} from 'preact/hooks';

import logo from '@assets/icon/logo.svg';
import menu from '@assets/icon/menu.svg';
import close from '@assets/icon/close.svg';

import NavigationLink from './NavigationLink';

function Navigation() {
  const [show, setShow] = useState<boolean>(false);
  const toggleNavigation = useCallback(() => setShow(prev => !prev), []);

  return (
    <nav className="w-full flex justify-end z-50">
      <button onClick={toggleNavigation} className="block lg:hidden">
        <img src={menu} alt="menu" width="34" height="20" />
      </button>
      <ul className="text-gray-700 hidden lg:flex lg:justify-end">
        <NavigationLink path="/" placeholder="Ana Sayfa" />
        <NavigationLink path="/menu" placeholder="Menü" />
      </ul>
      <div className={`fixed inset-0 transition-all lg:hidden ${show ? 'visible' : 'invisible'}`}>
        <div
          onKeyDown={toggleNavigation}
          onClick={toggleNavigation}
          className={`absolute inset-0 transition-colors ${
            show ? 'bg-black/60' : 'bg-transparent'
          }`}
        />
        <div
          className={`px-4 py-[52px] w-[80%] bg-white h-full relative transition-transform delay-100 ${
            show ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-12">
            <img src={logo} alt="logo" className="w-[180px] lg:w-[260px]" />
          </div>
          <ul className="text-gray-700 absolute top-1/2 -translate-y-1/2">
            <NavigationLink path="/" placeholder="Ana Sayfa" />
            <NavigationLink path="/menu" placeholder="Menü" />
          </ul>
          <button
            onClick={toggleNavigation}
            type="button"
            className={`grid place-items-center absolute right-0 translate-x-full top-[52px] h-[62px] aspect-square bg-primary rounded-r-2xl transition-transform delay-100 ${
              show ? 'scale-100' : 'scale-0'
            }`}
          >
            <img src={close} alt="Close Menu" className="mr-1" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
