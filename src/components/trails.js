import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect, useState } from 'react';
import { TrailsListContext } from '../context/TrailsList';

export default function Trails() {
  const { 
    trailsList, 
    setTrailsList,
    setModalVisible,
    setTrail,
    setGrade
  } = useContext(TrailsListContext);

  const url = 'https://60e2ee6f9103bd0017b47673.mockapi.io';

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

  useEffect(async () => {
    const response = await fetch(url + '/api/v1/trails/');
    const data = await response.json();

    setTrailsList(data);
  }, []);

  function handleOpenModal(trail) {
    const grade = trail.grade[0]

    fetch(url + '/api/v1/trails/'+grade.trailId+'/trails-grade/'+grade.id+'/courses')
      .then(r => r.json())
        .then(response => {
        setGrade(response);
      })
      .catch(error => {
        alert('Ocorreu um erro inesperado, por favor tente mais tarde');
        console.error();
      });

    setTrail(trail);
    setModalVisible(true);
    
  };

  return (
    <ul className="trails__list">
      <Slider {...settings}>
        {trailsList.map(trail => {
          return (
            <li className="trails__item" key={trail.id}>
              <figure className="trails__item--image">
                <img src={trail.image} />
              </figure>
              <article>
                <h2 className="trails__item--title">
                  {trail.name}
                </h2>
                <p className="trails__item--description">
                  {trail.description}
                </p>
                <div className='trails__item--button'>
                  <button 
                    onClick={() => handleOpenModal(trail)}
                  >detalhes</button>
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