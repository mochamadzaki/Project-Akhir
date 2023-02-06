import React from "react";
import Layout from "../components/Layout/Layout";
import asis from "../images/asis.jpg";
import {
  Box,
 
  Typography,
} from "@mui/material";



const Aslab = () => {
  return (
    <Layout>
      
       <Box
        sx={{
          
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px,max-height:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <div style={{height: '90vh'}}>
       <img src={asis} style={{ width: "150px", height: "150px",my: 2,marginTop:'30px'}}/>
      <Typography variant="h4">Asisstent Lab Komputer
</Typography><Typography variant="h4">(ASLAB)</Typography>
        <Typography variant="h6">        Assistant  Lab Komputer merupakan eskul yang bertujuan untuk memperdalam dan menambah kemampuan yang mengajarkeun tentang Software,Hardware,dan brainware.
</Typography>
        <br/>
        </div>
        </Box>
       
    </Layout>
  );
};

export default Aslab;
