import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ModuleAccord from "./ModuleAccord";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function MediaCard({ image, moduleName, description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ maxWidth: 345 }} className="my-3 cursor-pointer">
      <CardMedia sx={{ height: 150 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className="font-semibold font-roboto">{moduleName}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="font-extrabold font-roboto">
          <span className="font-extrabold font-roboto">Learn More</span>
        </Button>
        <div>
          <Button onClick={handleOpen}>More Details</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <span className="font-bold font-openSans">{moduleName}</span>
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <ModuleAccord />
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </CardActions>
    </Card>
  );
}
