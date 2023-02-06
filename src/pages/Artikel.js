import * as React from 'react';
import Card from '../Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout/Layout';
import s from "../images/s.jpeg"
import napak from "../images/napak.jpg"
import ldks from "../images/ldks.jpg"
import { width } from '@mui/system';



function Artikel() {
  return (
    <Layout>

    <div style={containerStyle}>
      <Card style={{width: "100",height: '100'}}
        image={ldks} xs={{outerHeight: '50', outerWidth: '50 '}}
        title="Card 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        <a href='https://smkbudayabangsaa.blogspot.com/2023/01/latihan-dasar-kepemimpinan-siswa.html'>Baca Selengkapnya</a>
      </Card>
    
      <Card style={{backgroundcolor: '#ebd8c8'}}
        image={ldks} xs={{outerHeight: '50', outerWidth: '50 '}}
        title="Card 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        Button="baca Selengkapnya">
          {/* <Button>
        <a href='https://smkbudayabangsaa.blogspot.com/2023/01/latihan-dasar-kepemimpinan-siswa.html'>Baca Selengkapnya</a>
      </Button> */}
      </Card>
      
    </div>
    </Layout>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
};


export default Artikel;