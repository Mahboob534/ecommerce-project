import React from 'react';
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import image from "../../assets/images/deal-img.jpg";
import { Box 
} from "@mui/material";
import { styled } from "@mui/material/styles";
  
//stylecomponent
const IMG = styled("img")`
  width: 5rem;
  height: 5rem; 
  border-radius: 5px;
  object-fit: cover;
  dispalay=flex
 
`;

const perview = ({src,delImg}) => {
    return (
        <Box>
            <Box component="span" sx={{ color: "red" }}><CancelPresentationTwoToneIcon onClick={delImg }/></Box>
            <Box  style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "8rem",
                height: "8rem",
                color: "#f5f5f5",
                marginRight: "auto",

            }} >
                <IMG src={'http://localhost:3002/files/'+src} />
              </Box>
        </Box>
    );
};

export default perview;


 