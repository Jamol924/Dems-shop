import { BackJobs } from "../../components/Back";
import FatureTovar from "../../components/common/FeatureTovar";
import MinNav from "../../components/common/MineNavbar/MinNav";
import Nav2 from "../../components/Nav2";
import { Wrapper, Row, Blocc } from "../sections/home/Feature";

import MainInfo from "../sections/item/MainInfo";

function Item() {
  return (
    <Blocc>
      <Nav2 />
      <MinNav />
      <BackJobs />
      <MainInfo />
      <Wrapper>
        <Row>
          <FatureTovar />
        </Row>
      </Wrapper>
    </Blocc>
  );
}

export default Item;


