import Image from '../images/img-trilha.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Trails() {
  var settings = {
    dots: true,
    infinite: false,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth:true,
          dots: true
        }
      }
      
    ]
  };

  return (
    <ul className="trails__list">
      <Slider {...settings}>
        <li className="trails__item">
          <figure className="trails__item--image">
            <img src={Image} />
          </figure>
          <article>
            <h2 className="trails__item--title">
              Trilha AWS
            </h2>
            <p className="trails__item--description">
              Desenvolva suas habilidades e prepare-se para usar a Nuvem AWS com a ajuda do AWS
            </p>
            <div className='trails__item--button'>
              <button>detalhes</button>
            </div>
          </article>
        </li>
        <li className="trails__item">
          <figure className="trails__item--image">
            <img src={Image} />
          </figure>
          <article>
            <h2 className="trails__item--title">
              Trilha AWS
            </h2>
            <p className="trails__item--description">
              Desenvolva suas habilidades e prepare-se para usar a Nuvem AWS com a ajuda do AWS
            </p>
            <div className='trails__item--button'>
              <button>detalhes</button>
            </div>
          </article>
        </li>
        <li className="trails__item">
          <figure className="trails__item--image">
            <img src={Image} />
          </figure>
          <article>
            <h2 className="trails__item--title">
              Trilha AWS
            </h2>
            <p className="trails__item--description">
              Desenvolva suas habilidades e prepare-se para usar a Nuvem AWS com a ajuda do AWS
            </p>
            <div className='trails__item--button'>
              <button>detalhes</button>
            </div>
          </article>
        </li>
      </Slider>
    </ul>
  );
}