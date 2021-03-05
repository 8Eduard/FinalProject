import React from "react";
import { HomeImage, HomeHome, HomeRow } from "./Home.style";
import { images } from "../../resources";

function Home() {
  return (
    <HomeHome>
      <div className="home_container">
        <HomeImage src={images.bg} alt="BackgroundImage" />
        <HomeRow>
          <Product
            title="Set 6 Role Banda Adeziva Imprimata Fragil, 48mm x 60m - Ideala pentru Sigilarea Coletelor Delicate"
            price={36.41}
            image={images.bandafrag}
            rating={4}
          />
          <Product
            title="Palet 48 Role Folie Stretch Uz Automat 16 Kg/Rola, 23 MIC - Ambalare si Paletizare"
            price={7.951}
            image={images.str23MIC}
            rating={5}
          />
        </HomeRow>
        <HomeRow>
          <Product
            title="Folie cu bule 50 gr / 2 straturi, DC Folie, - 30 cm x 100 m lungime - 30 m.p."
            price={29.45}
            image={images.bule1M}
            rating={5}
          />
          <Product
            title="Set 6 Buc Folie Stretch pentru Uz Manual 2 Kg/Rola, 23 MIC, Folie Net 1.3 Kg si Tub Carton 700 g - Folie pentru Ambalare si Paletizare"
            price={125.71}
            image={images.strMan2Kg}
            rating={4}
          />
          <Product
            title="Carton ondulat , DC Folie, 2 straturi , 280 gr./mp , rola 10,0m x 1,20m =12 m.p."
            price={31.42}
            image={images.crtOndul}
            rating={5}
          />
        </HomeRow>
        <HomeRow>
          <Product
            title="Banda de Legat PP 16 mm, 1500 M, 12 Kg - Banda Polipropilena pentru Legat si Ambalat Paleti"
            price={116.62}
            image={images.bandaPp16}
            rating={5}
          />
        </HomeRow>
      </div>
    </HomeHome>
  );
}

export default Home;
