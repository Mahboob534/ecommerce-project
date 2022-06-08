import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormProduct from "../../componentes/From/FormProdect"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'70%',
  height:'100%',
  overflow:'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalProduct(props) {
  let reload=props.reload
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{backgroundColor:"#86efac", width:'100px', m:3 ,fontFamily:" IRANSans-web"}} variant="outlined" onClick={handleOpen}> افزودن کالا</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
          ویرایش و افزودن کالا
          
          <FormProduct data={""} reload={reload} setOpen={setOpen}/>
          </Typography>
         
        </Box>
       
      </Modal>
    </div>
  );
}
