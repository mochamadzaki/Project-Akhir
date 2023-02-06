import React from "react";
import Layout from "../components/Layout/Layout";

import {
  Box,
  Typography,
} from "@mui/material";
import futsal from "../images/futsal.jpg"

const Futsal = () => {
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
       <img src={futsal} style={{ width: "150px", height: "150px",my: 2}}/>
      <Typography variant="h4">Futsal</Typography>
        <Typography variant="h6">Smk Budaya Bangsa</Typography>
        <br/>
        <p sx={{textAlign: 'center'}}>
        Menurut Surat ijin operasional,Sekolah ini berdiri pada tahun 2004.
        namun tidak banyak orang tau bahwa sekolah ini berdiri sejak 1997.
        Mendapat  Akreditasi Sekolah “A”,berdasarkan sertifikat 763/BAN-SM/SK/2019.
        </p>
        </div>
        </Box>
       
    </Layout>
  );
};

export default Futsal;
