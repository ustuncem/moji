import {useState, useRef, useCallback} from 'preact/hooks';

import arrow from '@assets/icon/arrow.svg';

export type MenuItems = {
  id: number;
  title: string;
  price: string;
};

type Props = {
  heading: string;
  items: MenuItems[];
};

function Accordion({heading, items}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <article className="w-full mb-4 overflow-hidden">
      <div
        className="flex justify-between gap-x-4 p-4 bg-secondary-500 rounded-md hover:cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="text-xl">{heading}</h1>
        <img
          src={arrow}
          alt="Down Arrow Icon"
          loading="lazy"
          width="20"
          height="20"
          className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div
        ref={panelRef}
        className={`rounded-md bg-primary-200 transition-all ${isOpen ? 'mt-4' : ''}`}
        style={{height: isOpen ? panelRef.current?.scrollHeight : 0}}
      >
        <div className="py-4">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="px-4 mb-2 py-1 last:mb-0 grid grid-cols-[3fr_2fr] gap-x-4"
            >
              <p>{item.title}</p>
              <p className="justify-self-end self-center">{item.price} ₺</p>
              {items.length - 1 !== idx && <hr className="mt-2 border-primary-700 col-span-2" />}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Accordion;
