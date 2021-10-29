import { Carousel } from "react-carousel-minimal";
import styled from "styled-components";

function CarouselApp({dataImg}) {
  const data = [
    {
      image: `http://dems.inone.uz/api${dataImg.images[0]}`
    }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <DemoImgas className="App">
      <div style={{ textAlign: "center" }}>
        <div className="demo">
          <Carousel
            data={data}
            time={3000}
            width="850px"
            height="400px"
            captionStyle={captionStyle}
            radius="6px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            // slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            thumbnailHeight="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "600px",
              margin: "0px auto 30px",
            }}
          />
        </div>
      </div>
    </DemoImgas>
  );
}

export default CarouselApp;
const DemoImgas = styled.div`
  .thumbnails img{
    height: 100px;
    width: 100px;
    object-fit: cover;
  }
  .active-thumbnail{
    border: none;
  }

`