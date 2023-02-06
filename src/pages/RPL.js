import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import futsal from "../images/futsal.jpg"

const ProgramStudi = () => {
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
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
         <Typography variant="h4">Program Studi</Typography>
        <img src={futsal} style={{height:'90vh'}}/>
      {/* <Typography variant="h4">Sejarah Singkat</Typography> */}
        <Typography variant="h6">Rekayasa Perangkat Lunak</Typography>
        <br/>
        <p sx={{textAlign: 'center'}}>
        Menurut Surat ijin operasional,Sekolah ini berdiri pada tahun 2004.
        namun tidak banyak orang tau bahwa sekolah ini berdiri sejak 1997.
        Mendapat  Akreditasi Sekolah “A”,berdasarkan sertifikat 763/BAN-SM/SK/2019.
        </p>
        </Box>
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
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
         <Typography variant="h4">Program Studi</Typography>
        <img src={futsal} style={{height:'90vh'}}/>
      {/* <Typography variant="h4">Sejarah Singkat</Typography> */}
        <Typography variant="h6">Rekayasa Perangkat Lunak</Typography>
        <br/>
        <p sx={{textAlign: 'center'}}>
        Menurut Surat ijin operasional,Sekolah ini berdiri pada tahun 2004.
        namun tidak banyak orang tau bahwa sekolah ini berdiri sejak 1997.
        Mendapat  Akreditasi Sekolah “A”,berdasarkan sertifikat 763/BAN-SM/SK/2019.
        </p>
        </Box>
    </Layout>
  );
};

export default ProgramStudi;
