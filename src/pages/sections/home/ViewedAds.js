import styled from "styled-components";
import ViewedAdsjr from "../../../components/common/ViewedAdsjr";
import img from "../../../assets/phone.png";

const ProductAds = [
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },

  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
];
const ViewedAds = () => {
  return (
    <div>
      <Wrapper>
        <div className="content">
          <h1>Recently viewed items</h1>
          <Row>
            <ViewedAdsjr datas={ProductAds} />
          </Row>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    text-align: center;
    padding-bottom: 5px;
    font-family: "Quicksand", sans-serif;
  }
`;

const Row = styled.div`
  width: 1015px;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width:1066px){
    width: 755px;
  }
  @media (max-width:800px){
    width: 495px;
  }
`;





export default ViewedAds;
