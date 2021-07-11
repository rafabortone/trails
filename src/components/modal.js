
export default function Modal() {
  return (
    <div className="modal">
      <div className="modal__content">
        <article>
          <h2 className="modal__title">
            Trilha AWS
          </h2>
          <p className="modal__description">
            Venha aprender, se atualizar e obter mais conhecimento em uma das linguagem mais conhecidas e utilizadas na web
          </p>
          <div className='modal__button'>
            <button>inscrever-se</button>
          </div>
        </article>
        <nav className="modal__grade">
          <ul className="modal__grade--list">
            <li className="modal__grade--item">
              <h3>Lógica de programação</h3>
              <p>40 horas</p>
            </li>
            <li className="modal__grade--item">
              <h3>Lógica de programação</h3>
              <p>40 horas</p>
            </li>
            <li className="modal__grade--item">
              <h3>Lógica de programação</h3>
              <p>40 horas</p>
            </li>
            <li className="modal__grade--item">
              <h3>Lógica de programação</h3>
              <p>40 horas</p>
            </li>
            <li className="modal__grade--item">
              <h3>Lógica de programação</h3>
              <p>40 horas</p>
            </li>
            <li className="modal__grade--item">
              <h3>Lógica de programação</h3>
              <p>40 horas</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}