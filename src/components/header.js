import userIcon from '../icons/icon-user.svg'
import { TrailsListContext } from '../context/TrailsList';
import { useContext } from 'react';

export default function Header() {
  const { subscription } = useContext(TrailsListContext);
  
  return (
    <header>
      <article>
        <p>{'inscrições: '+ subscription.length}</p>
        <img src={userIcon} />
      </article>
    </header>
  );
}