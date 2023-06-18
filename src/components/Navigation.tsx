import {useState, useCallback} from 'preact/hooks';

import NavigationLink from './NavigationLink';

function Navigation() {
  const [show, setShow] = useState<boolean>(false);
  const toggleNavigation = useCallback(() => setShow(prev => !prev), []);

  return (
    <nav className="w-full">
      <ul className="text-gray-700 hidden lg:flex lg:justify-end">
        <NavigationLink path="/" placeholder="Ana Sayfa" />
        <NavigationLink path="/menu" placeholder="Menü" />
      </ul>
    </nav>
  );
}

export default Navigation;
