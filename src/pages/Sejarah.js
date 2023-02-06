import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import lapang from "../images/lapang.jpeg"


const Profile = () => {
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
        <div className="home" style={{ backgroundImage: `url(${lapang})`,opacity: '0.5'}}>
        <Typography variant="h4">Sejarah Singkat</Typography>
        <Typography variant="h6">Smk Budaya Bangsa</Typography>
        <br/>
        <p sx={{textAlign: 'center'}}>
        Menurut Surat ijin operasional,Sekolah ini berdiri pada tahun 2004.
        namun tidak banyak orang tau bahwa sekolah ini berdiri sejak 1997.
        Mendapat  Akreditasi Sekolah “A”,berdasarkan sertifikat 763/BAN-SM/SK/2019.
        </p>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
        </div>
      </Box>
    </Layout>
  );
};

export default Profile;
