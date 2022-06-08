import  React,{useState,useMemo} from 'react';
import {Box,Grid} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import useDebounce from "../Debounce/Debounce";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Div =styled("div")`
position: absolute;
top:50;
margin-right:50px
margin-top:5px;
width: 280px;
height: 200px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
overflow: hidden;
overflow-y: auto;
`;
const Image=styled("img")`
height:40px;
width:30px;
`;

const Input =styled('input')`
height:30px;
padding:4px;
border-radius:5px;
background-color:#fff;


`;
const Span=styled('span')`
height:30px;
width:30px;
color:#fff;
border-radius:5px;
background-color:#00be39;
display:flex !important;


`;

export default function BasicModal(props) {
    const products=props.products
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  const product = useMemo(() => {
    if (!search) return -1 ;

    return products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
    });
  }, [debouncedSearchTerm, products]);

function handleChange(e){
     setSearch(e.target.value)
}


  return (
    <div>
      <Button onClick={handleOpen} sx={{fontFamily: " IRANSans-web",
                  textAlign: "center",color:"#000"}}>جست وجو</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        جست و جو
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Grid sx={{dispaly:'flex'}}>
            <Input
              placeholder="جست و جو ..."
             value={search}
             onChange={handleChange}
            />
            {product.length >= 0 
            ? (
            <Div > 
                 {product.map((val, key) => (
                <>
                <Image src={`http://localhost:3002/files/${val.thumbnail}`}></Image> 
               <Link to={`/Detail/${val.id}`}>{val.name}</Link><br/>
               </>
              ))
              }
              </Div>)
            : (<span></span>)}
 
 </Grid>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
