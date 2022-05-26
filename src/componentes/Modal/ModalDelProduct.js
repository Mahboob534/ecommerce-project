
import  React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RiDeleteBin5Fill } from "react-icons/ri";
import deleteProduct from '../../api/getAll/deleteProduct';

export default function ModalDelProduct(props) {

  const [open, setOpen] = React.useState(false);

   
  async function Handledelete(id) {
    try{
     await deleteProduct(id)
     
    } 
   catch(error){
        console.log(error);
   }
 }
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <Button  onClick={handleClickOpen}>
       <RiDeleteBin5Fill/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        هشدار
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {`آیا از حذف کتاب ${props.row.name} اطمینان دارید؟`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>خیر</Button>
          <Button onClick={Handledelete(props.row.id)} autoFocus>
            بله
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}