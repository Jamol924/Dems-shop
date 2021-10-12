import { Checkbox } from "@mui/material";
import React from "react";
import styled from "styled-components";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function AddChickbox() {
  return (
    <>
      <Wrapper>
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            display: "inline-block",
            color: "#f85c70",
            "&.Mui-checked": {
              color: "#f85c70",
            },
          }}
        />
        <Text>
          Mening qurilmaga elektron aloqa va telekommunikatsiya orqali DEMS
          Group'dan, tegishli tashkilotlar va ularning sheriklaridan tijorat,
          hamda marketing xabarlarini (masalan, yangiliklar byulleteni, SMS)
          olishga rozilik bildiraman.
        </Text>
      </Wrapper>
    </>
  );
}

export default AddChickbox;

const Wrapper = styled.div`
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  color: #000000;
  line-height: 16px;
  font-size: 12px;
`;
