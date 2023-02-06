import React from "react";
import Layout from "../components/Layout/Layout";

import {Box,Typography} from "@mui/material";
import pramuka from "../images/pramuka.jpg"

const Pramuka = () => {
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
       <img src={pramuka} style={{ width: "150px", height: "150px",my: 2, marginTop:'30px'}}/>
      <Typography variant="h4">Pramuka</Typography>
        <Typography variant="h6">Gerakan Kepanduan Praja Muda Karana, lebih dikenal sebagai Gerakan Pramuka Indonesia, adalah nama organisasi pendidikan nonformal yang menyelenggarakan pendidikan kepanduan di Indonesia. Kata "Pramuka" merupakan singkatan dari Praja Muda Karana, yang memiliki arti Jiwa Muda yang Suka Berkarya.</Typography>
      
        </div>
        </Box>
       
    </Layout>
  );
};

export default Pramuka;
