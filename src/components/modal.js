import { useContext } from "react";
import { TrailsListContext } from '../context/TrailsList';

export default function Modal() {
  const {
    modalVisible, 
    setModalVisible,
    trail,
    grade
  } = useContext(TrailsListContext);

  console.log(trail);
  console.log(grade);
  return (
    <>
    {modalVisible ? 
      <div className="modal" >
        <div className="modal__content">
          <div 
            className="modal_close" 
            onClick={() => setModalVisible(false)}
          >
            fechar
            <img src="" />
          </div>
          <article>
            <h2 className="modal__title">
              {trail.name}
            </h2>
            <p className="modal__description">
              {trail.description}
            </p>
            <div className='modal__button'>
              <button>inscrever-se</button>
            </div>
          </article>
          <nav className="modal__grade">
            <ul className="modal__grade--list">
              {grade.map(({name, hours, id}) => {
                return (
                  <li className="modal__grade--item" key={id}>
                    <h3>{name}</h3>
                    <p>{hours + ' horas'}</p>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div> : null
    }
    </>
  );
}