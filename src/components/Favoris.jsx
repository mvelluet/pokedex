import React from "react";
import * as R from "ramda";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardContainer = styled(Box)(({ theme }) => ({
  'display': 'grid',
  'gridTemplateColumns':' repeat(3, 1fr)',
  'gridTemplateRows': '1fr',
  'gridColumnGap': theme.spacing(1),
  'gridRowGap': theme.spacing(1),
}));

const Favoris = () => {
  const favoris = useSelector(R.prop('favoris'));
  return (
    <div>
      <CardContainer>
        {R.map((id) => (
          <Card
            key={`pokemon-${id}`}
            id={id}
          />
        ))(R.values(favoris))}
      </CardContainer>
    </div>
  );
}

export default Favoris;