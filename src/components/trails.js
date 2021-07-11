import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect } from 'react';
import { TrailsListContext } from '../context/TrailsList';

export default function Trails() {
  const { trailsList, setTrailsList } = useContext(TrailsListContext);

  useEffect(async () => {
    const response = await fetch('https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/trails/');
    const data = await response.json();
    setTrailsList(data);
  }, []);

  console.log(trailsList);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 916,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          variableWidth: true,
          arrows: false,
        }
      }
    ]
  };

  return (
    <ul className="trails__list">
      <Slider {...settings}>
        {trailsList.map(({ id, image, name, description }) => {
          return (
            <li className="trails__item" key={id}>
              <figure className="trails__item--image">
                <img src={image} />
              </figure>
              <article>
                <h2 className="trails__item--title">
                  {name}
                </h2>
                <p className="trails__item--description">
                  {description}
                </p>
                <div className='trails__item--button'>
                  <button>detalhes</button>
                </div>
              </article>
            </li>
          );
        })
        }
      </Slider>
    </ul>
  );
}