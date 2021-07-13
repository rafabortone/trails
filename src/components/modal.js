import { useContext } from "react";
import { TrailsListContext } from '../context/TrailsList';
import IconClose from '../icons/icon-close.svg'
import Swal from 'sweetalert2'

export default function Modal() {
  const {
    modalVisible,
    setModalVisible,
    trail,
    grade,
    subscription,

  } = useContext(TrailsListContext);

  function handleSubscription(trailId) {

    subscription.push(trailId);
    Swal.fire(
      '',
      'Inscrição realizada com sucesso!',
      'success'
    )
    setModalVisible(false);
 
  }
  return (
    <>
      {modalVisible ?
        <div className="modal" data-testeid="modal" tabindex="-1">
          <div className="modal__content" aria-modal="true" id="dialog1" role="dialog" aria-labelledby="dialog1_label" aria-describedby="dialog1_desc" aria-hidden="true" >
            <div className="modal__close">
              <img 
                src={IconClose} 
                onClick={() => setModalVisible(false)}
                alt="botão para fechar a caixa de dialogo"
                id="dialog1_close"
              />
            </div>
            <article>
              <h2 className="modal__title" id="dialog1_label">
                {trail.name}
              </h2>
              <p className="modal__description" id="dialog1_desc">
                {trail.description}
              </p>
              <div className='modal__button'>
                {subscription.includes(trail.id) ?
                  <h3>Inscrito</h3> :
                  <button
                    onClick={() => handleSubscription(trail.id)}
                    type="button"
                  >inscrever-se</button>
                }
              </div>
            </article>
            <nav className="modal__grade">
              <ul className="modal__grade--list">
                {grade.map(({ name, hours, id }) => {
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