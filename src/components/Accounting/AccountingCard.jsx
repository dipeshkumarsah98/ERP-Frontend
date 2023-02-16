import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  title,
  color,
  buttonText,
  handler,
}) {
  return (
    <Card
      sx={{ width: "100%", height: "170px" }}
      style={{ padding: "12px", textAlign: "left"  }}
    >
      <CardHeader
        title={
          <Typography variant="h5" sx={{ color: `${color}` }} fontWeight="400">
            {title}
          </Typography>
        }
        style={{ padding: "0px 12px" }}
      />
      <CardContent style={{ padding: "2px 12px ", fontSize: "16px" }}>
        <Typography variant="body" color="text.secondary">
          Rs 250,000 /- NPR
        </Typography>
      </CardContent>
      <CardContent style={{ padding: "2px 12px  ", fontSize: "8px" }}>
        <Typography variant="body1" color="text.secondary">
          From 25 Jan 2020
        </Typography>
      </CardContent>
      <CardContent style={{ padding: "2px 12px  ", fontSize: "8px" }}>
        <Typography variant="body1" color="text.secondary">
          To 11 March 2021
        </Typography>
      </CardContent>
      <CardContent style={{ paddingTop: "12px ", fontSize: "8px" }}>
        <Button variant="contained" onClick={handler}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
