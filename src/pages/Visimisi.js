import React from "react";
import Layout from "../components/Layout/Layout";

import {
  Box,
 
  Typography,
} from "@mui/material";


const Visimisi = () => {
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
      <Typography variant="h4" style={{marginTop:'30px'}}>visi</Typography>
        <Typography variant="h6">Mewujudkan sumber daya manusia yang berkualitas, mandiri, unggul, berbudaya berlandaskan IMTAK yang menguasai IPTEK berwawasan lingkungan.</Typography>
      <br/>
      <br/>
      <Typography variant="h4">Misi</Typography>
      Menyelenggarakan system pendidikan berbasis link and match melalui program pendidikan system ganda dengan dunia usaha dan industry
Menyelenggarakan pendidikan dengan nilai – nilai moral yang tinggi dan berakhlak mulia
Menjalin kerjasama dalam mengembangkan keterampilan baik regional, nasional maupun internasional.
Meningkatkan IMTAK dan budaya bangsa melalui kegiatan ekstrakurikuler.
Meningkatkan kualitas dan kuantitas unit produksi melalui kemitraan dengan IDUKA.
Memberdayakan sumber daya sekolah dalam mewujudkan sekolah berwawasan lingkungan.
        </div>
        </Box>
       
    </Layout>
  );
};

export default Visimisi;
