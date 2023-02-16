import { AiOutlineClose } from "react-icons/ai";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function EachEvent({ title, date, img }) {
  const code = title.replace(/[^A-Z0-9]+/gi, "_");
  return (
    <div data-bs-toggle="modal" data-bs-target={`#${code}`}>
      <Card sx={{ maxWidth: 345 }} className="cursor-pointer">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
      <div
        className="modal fade"
        id={code}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title font-openSans font-semibold text-xl"
                id="exampleModalLabel"
              >
                {title || "Your event titile goes here"}
              </h5>
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <AiOutlineClose size={30} />
              </button>
            </div>
            <div className="modal-body">
              <img src={img} alt="image" className="rounded-sm" />
              {/* <span className="text-lg mt-2 text-blue-500 font-mono font-semibold">
                Date: {date}
              </span> */}
              <div className="my-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                facere ullam aspernatur eveniet earum, similique, placeat aut
                ipsa sed fugit dolor aliquam? Voluptates pariatur odit
                architecto, dolorem inventore eos. Nostrum beatae odio
                exercitationem reiciendis earum nesciunt, voluptate incidunt
                repellendus fugit.
              </div>
              <div className="my-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                impedit quam temporibus voluptatibus reiciendis quisquam
                deserunt provident nam, tempora sint accusantium tempore
                cupiditate ipsam modi alias aliquid architecto minus aliquam
                iusto culpa necessitatibus nihil sit. Animi laboriosam inventore
                molestias velit cum error reiciendis porro rerum asperiores
                culpa est, sed praesentium quos corporis sunt ullam esse iusto
                tenetur aperiam distinctio rem? Aut nesciunt repudiandae ab
                placeat. Nisi exercitationem perspiciatis impedit soluta
                repudiandae et necessitatibus fuga consequuntur libero ullam
                voluptas, at delectus ipsa excepturi quia perferendis omnis
                ipsum porro? Ducimus voluptate nostrum odit. Eos perspiciatis
                neque nobis optio est fuga molestiae eum?
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="bg-red-600 px-3 py-2 ml-3 rounded-sm text-white font-roboto font-semibold  hover:bg-red-500"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
