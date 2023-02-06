import React from "react";
import Layout from "../components/Layout/Layout";

import { Box,Typography
} from "@mui/material";
import sispala from "../images/sispala.jpg"


const Ekstrakulikuler = () => {
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
       <img src={sispala} style={{ width: "150px", height: "150px",my: 2,marginTop:'30px'}}/>
      <Typography variant="h4">Siswa Pecinta Alam</Typography>
      <Typography variant="h4" style={{paddingTop:'5px'}}>(SISPALA)</Typography>
        <Typography variant="h6" style={{textAlign: 'center',justifyitems:'center'}}>SISPALA BHADRIKA  adalah salah satu ekstrakulikuler di Smk Budaya Bangsa yang sudah berdiri sejak 2017.
Awal mulanya bernama KOPALA BHADRIKA (Komunitas pecinta alam) pada angkatan  ke-1 dan 2,lalu diubah pada angkatan ke-3 menjadi SISPALA BHADRIKA hingga saat ini.

ESKUL ini tidak hanya tentang mendaki dan camping namun lebih luas dari itu seperti
merawat,menjaga lingkungan sekitar,belajar banyak hal semisal survive di alam bebas dan membangun karakter dari kepribadian masing-masing.
</Typography>
       
        </div>
        </Box>
       
    </Layout>
  );
};

export default Ekstrakulikuler;
