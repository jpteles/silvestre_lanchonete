import Carousel from 'react-bootstrap/Carousel';

import ViradoPaulista from '../Imagens/virado.png';
import BifeRole from '../Imagens/bife.png';
import Feijoada from '../Imagens/feijuca.png';
import Funcionamento from '../Imagens/funcionamento.png';
import { useState } from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="h-200" src={ViradoPaulista} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-200" src={BifeRole} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-200" src={Feijoada} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-200" src={Funcionamento} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;