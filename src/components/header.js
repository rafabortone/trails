import userIcon from '../icons/icon-user.svg'

export default function Header() {
  return (
    <header>
      <article>
        <p>inscrições: 0</p>
        <img src={userIcon} />
      </article>
    </header>
  );
}