import React from 'react'
import { Layout, Menu, Row, Col, Divider, Table, Form, Modal, Input, Button, Select} from 'antd';
import Navbar from '../components/Navbar'


function Sambutan() {
  return (
    <>
    <Row>
      <Navbar />
    </Row>
    <Row>
      <Col span={24}>
        <h1 align="center">Sambutan Ketua Umum</h1>
        <Row>
          <Col span={8}></Col>
          <Col span={8} align="center" style={{textAlign: "justify"}}>
              <h4>Kita Harus Lebih Baik…..!!! Songsong Prestasi Masa Depan Bersama Web KONI Kulon Progo Assalamualaikum Warohmatuloh Wabarokatuh Salam sejahtera untuk kita Salam olahraga Sudah menjadi komitmen jajaran pengurus KONI Kabupaten Kulon Progo. Kami terus berupaya memajukan dan meningkatkan prestasi seluruh cabang olahraga. Upaya tersebut kami gerakkan secara bersama-sama diseluruh lini pengkab cabor melalui bidang masing-masing untuk menciptakan harmonisasi demi memperkuat cabang olahraga. Program kerja dan struktur organisasi kami perkuat dengan seminar, pelatihan cabor, workshop peningkatan kapasitas pelatih, training of trainer motivation pelatih serta pemberian motivasi penguatan cabang olahraga dengan turun ke bawah ke cabor-cabor dan kapanewon. Saya melihat adanya kemajuan yang diukur dengan hasil PORDA. Perolehan medali dari tahun ke tahun mengalami kemajuan yang cukup signifikan. Tahun 2013 KONI Kabupaten Kulon Progo memperoleh medali emas 19, tahun 2015 memperoleh 23 emas, tahun 2017 memperoleh 33 medali emas dan tahun 2019 memperoleh 40 medali emas. Bupati Kulon Progo selalu mensuport dengan menaikkan bonus tali asih kepada atlet peraih medali di event PORDA tahun 2019. Semoga PORDA ke-XVI tahun 2022 dan PORDA-PORDA berikutnya KONI Kulon Progo dapat meraih medali emas yang lebih baik. Aamiin….. Saya menghimbau kepada seluruh jajaran pengurus KONI Kulon Progo dan seluruh pengurus pengkab anggota KONI Kulon Progo untuk dapat memanfaatkan fasilitas Web KONI Kulon Progo ini sebagai sarana komunikasi dan input data pelaku olahraga. Demikian sambutan saya dan salam olahraga Ketua Umum KONI Kabupaten Kulon Progo</h4>
              <h4>KUSDIRA, BA</h4>
          </Col>
          <Col span={8}></Col>
        </Row>
      </Col>
    </Row>
    </>
  )
}

export default Sambutan