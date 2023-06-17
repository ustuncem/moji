import {useState, useCallback} from 'preact/hooks';

function Navigation() {
  const [show, setShow] = useState<boolean>(false);
  const toggleNavigation = useCallback(() => setShow(prev => !prev), []);

  return (
    <nav>
      <h1>Merhaba</h1>
    </nav>
  );
}

export default Navigation;
