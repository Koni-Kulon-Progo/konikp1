import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Col, Row, Card } from 'antd'
import Koni1 from '../assets/koni1.jpeg'
import Koni2 from '../assets/koni2.jpeg'
import Koni3 from '../assets/koni3.jpeg'
import Image from 'next/image'
import { Carousel } from 'antd';
import Badminton from '../assets/badminton.png'
import Renang from '../assets/renang.png'
import Karate from '../assets/karate.png'


function News() {

  const { Meta } = Card

  const images = [
    {
      id: 1,
      url: Karate
    },
    {
      id: 2,
      url: Renang
    },
    {
      id: 3,
      url: Badminton
    }
  ];

  return (
    <>
     <Row>
        <Navbar />
        <Row>
    <Col span={24} style={{ backgroundColor: "black", color: "white"}}>
    <Carousel autoplay>
  {images.map((image) => (
    <Col key={image.id} span={24} align="center">
      <Image src={image.url} alt="gambar" width={150} height={100} />
    </Col>
  ))}
</Carousel>
            <h1 align="center">News & Event</h1>
            <h3 align="center" style={{marginBottom: "78px",paddingLeft: "20%", paddingRight: "20%"}}>Komite Olahraga Nasional Indonesia KONI Kabupaten Kulon Progo merupakan induk organiasi cabang olahraga yang menaungi sebanyak 45 cabang olahraga (cabor) dan 2 badan olahraga fungsional (Siwo PWI Kulon Progo dan Perwosi Kulon Progo). Pada kepengurusan KONI Kabupaten Kulon Progo masa bakti 2021-2025 yang dipimpin Kusdira BA., segala aktifitas dilakukan di sekretariatan kantor KONI Kulon Progo yang menempati salah satu ruangan di Stadion Cangkring Wates. Untuk kelancaran pelayanan dan administrasi, KONI Kabupaten Kulon Progo mempunyai 2 (dua) orang staf yang bertugas 
                setiap hari kerja 5 (lima)</h3>
        </Col>
        <Col span={8} xs={{span:8}} align="center" style={{ backgroundColor: " black"}}>
        <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <Image
          alt="kewr"
          src={Koni2}
          width={290}
        />
      }
    >
      <Meta
        title="Example Card Title"
        description="This is an example card with some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum eget sapien rutrum blandit vel sed odio. Integer pharetra orci in risus tincidunt facilisis."
      />
    </Card>
        </Col>
        <Col span={8} xs={{span:8}} align="center" style={{ backgroundColor: " black"}}>
        <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <Image
          alt="kewr"
          src={Koni1}
          width={290}
        />
      }
    >
      <Meta
        title="Example Card Title"
        description="This is an example card with some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum eget sapien rutrum blandit vel sed odio. Integer pharetra orci in risus tincidunt facilisis."
      />
    </Card>
        </Col>
        <Col span={8} xs={{span:8}} align="center" style={{ backgroundColor: " black"}}>
        <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <Image
          alt="kewr"
          src={Koni3}
          width={290}
        />
      }
    >
      <Meta
        title="Example Card Title"
        description="This is an example card with some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum eget sapien rutrum blandit vel sed odio. Integer pharetra orci in risus tincidunt facilisis."
      />
    </Card>
        </Col>
        <Col span={8} xs={{span:8}} align="center" style={{ backgroundColor: " black", paddingTop : "20px", paddingBottom: "50px"}}>
        <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <Image
          alt="kewr"
          src={Koni2}
          width={290}
        />
      }
    >
      <Meta
        title="Example Card Title"
        description="This is an example card with some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum eget sapien rutrum blandit vel sed odio. Integer pharetra orci in risus tincidunt facilisis."
      />
    </Card>
        </Col>
        <Col span={8} xs={{span:8}} align="center" style={{ backgroundColor: " black", paddingTop: "20px", paddingBottom: "50px"}}>
        <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <Image
          alt="kewr"
          src={Koni2}
          width={290}
        />
      }
    >
      <Meta
        title="Example Card Title"
        description="This is an example card with some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum eget sapien rutrum blandit vel sed odio. Integer pharetra orci in risus tincidunt facilisis."
      />
    </Card>
        </Col>
        <Col span={8} xs={{span:8}} align="center" style={{ backgroundColor: " black", paddingTop: "20px", paddingBottom: "50px"}}>
        <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <Image
          alt="kewr"
          src={Koni2}
          width={290}
        />
      }
    >
      <Meta
        title="Example Card Title"
        description="This is an example card with some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum eget sapien rutrum blandit vel sed odio. Integer pharetra orci in risus tincidunt facilisis."
      />
    </Card>
        </Col>
    </Row>
        <Footer />
      </Row>
    </>
  )
}

export default News