import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MuiDetails() {
  const [open, setOpen] = React.useState(false);
  const [Virtual, setVirtual] = React.useState(false);
  const [Inoffice, setInOffice] = React.useState(false);
  const [SubmitPage, setSubmitPage]=React.useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const handleVirtual = () => {
    setVirtual(true);
    // handleClose(true);
    setOpen(false);
  };
  //   const handleVirtualClose = () => {
  //     setVirtual(false);
  //   };
  const handleOffice = () => {
    setInOffice(true);
    setOpen(false);
    // handleClose(true);
  };
  const handleSubmitPage =()=>{
    setSubmitPage(true);
    setVirtual(false);
  }
  //   const handleOfficeClose = () => {
  //     setInOffice(false);
  //   };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        // onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Is Virtual
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Is In Office
          </Typography> */}
          <Button onClick={handleClose}>X</Button>
          <Button onClick={handleVirtual}>Virtual</Button>
          <Button onClick={handleOffice}>In-Office</Button>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={Virtual}
        // onClose={handleVirtualClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            <Button onClick={handleSubmitPage}>Next</Button>
          </Typography>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={Inoffice}
        // onClose={handleOfficeClose}
        
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Is In Office
          </Typography>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={SubmitPage}
        // onClose={handleOfficeClose}
        
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Is The Submit Page
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
