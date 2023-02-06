import React from "react";
import Layout from "../components/Layout/Layout";
import gedung from "../images/gedung.jpg";
import "../styles/HomeStyles.css";
import paasep from "../images/paasep.jpg"
import icon from "../images/icon.jpg"
import {Box, Icon, Typography} from '@mui/material'

function ImageWithCaption(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <p>{props.caption}</p>
    </div>
  );
}
const Home = () => {
  return (  
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${gedung})`}}>
          <h3>SELAMA DATANG DI WEBSITE</h3>
          <p>Smk Budaya Bangsa</p>
    
        </div>
      
      
 
    <div className="page" style={{ display: "flex",paddingleft: "100px",height:'90vh' }}>
      <img src={paasep} alt={paasep.alt} style={{ width: "350px", height: "350px" ,paddingLeft:'50px',paddingTop:'150px' }}></img>
      <h3>abece</h3>
      <div style={{ paddingLeft: "70px" ,marginTop:'50px',paddingRight:'50'}}>
        <h1 variant="h4">Sambutan Kepala Sekolah</h1>
        <p>
        Assalamu'alaikum wr.wb.</p>
        <p>
Puji syukur kepada Alloh SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerahNya sehingga website SMK Budaya Bangsa dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.  Dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin. Semoga dengan adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu pengetahuan dan informasi seputar SMK Budaya Bangsa.
Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan pemerhati pendidikan secara khusus bagi SMK Budaya Bangsa.
Akhirnya kami mengharapkan masukan dari berbagai pihak untuk website ini agar kami terus belajar dan meng-update diri, sehingga tampilan, isi dan mutu website akan terus berkembang dan lebih baik nantinya. Terima kasih atas kerjasamanya, maju terus untuk mencapai yang lebih baik lagi.
Wassalamu'alaikum wr.wb.
        </p>
      </div>
    </div>

    <div className="images-wrapper">
      <ImageWithCaption 
       img src={'icon.jpg'} 
        alt='Placeholder Image 1' 
        caption='Caption for Image 1' 
      />
      <ImageWithCaption 
        src='https://via.placeholder.com/150' 
        alt='Placeholder Image 2' 
        caption='Caption for Image 2' 
      />
    </div>
    {/* <>
      <Box> */}
   {/* <Typography
          variant="h5"
          sx={{textAlign: "center",
            "@media (max-width:200px)": {
              fontSize: "1rem",bgcolor: "black",height:'10vh'
            },
          }}
        >
          Program Studi
        </Typography>
     </Box>
     <div className="prodi">
      <img src="" alt=""/>
      <h2></h2>
      <p></p>

      <img src="" alt=""/>
      <h2></h2>
      <p></p>
     </div>
</>
<div className="pages" style={{ display: "flex",paddingleft: "100px",height:'80vh',backgroundColor:'grey' }}>
      <img src={icon} alt={icon.alt} style={{ width: "350px", height: "350px" ,paddingLeft:'50px',paddingTop:'150px' }}></img>
        <p>
        Assalamu'alaikum wr.wb.</p>
        <p>
Puji syukur kepada Alloh SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerahNya sehingga website SMK Budaya Bangsa dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.  Dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin. Semoga dengan adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu pengetahuan dan informasi seputar SMK Budaya Bangsa.
Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan pemerhati pendidikan secara khusus bagi SMK Budaya Bangsa.
Akhirnya kami mengharapkan masukan dari berbagai pihak untuk website ini agar kami terus belajar dan meng-update diri, sehingga tampilan, isi dan mutu website akan terus berkembang dan lebih baik nantinya. Terima kasih atas kerjasamanya, maju terus untuk mencapai yang lebih baik lagi.
Wassalamu'alaikum wr.wb.
        </p>
      </div> */}
    


    </Layout>
  );
};

export default Home;
