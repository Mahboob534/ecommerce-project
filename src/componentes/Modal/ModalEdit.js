import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import { FiEdit2 } from "react-icons/fi";
  
import FormEdit1 from "../../componentes/From/FormEdit1"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height:'100%',
  overflow:'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit( props) {
    let id=props.id
    let reload=props.reload
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [product,setProduct]= React.useState([])

React.useEffect(()=>{
    getProduct(id)
},[id])
  async function getProduct(id){
    const response = await axios.get(`http://localhost:3002/products?id=${id}`)
    setProduct(response.data)
  }
  //console.log(product);
  return (
    <div>
      <Button onClick={handleOpen}> <FiEdit2/> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
          ویرایش و افزودن کالا
          
           <FormEdit1 data={product[0]} reload={reload} setOpen={setOpen}/> 
          </Typography>
         
        </Box>
       
      </Modal>
    </div>
  );
}
