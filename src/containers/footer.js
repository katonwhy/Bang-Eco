import React from 'react'
import Footer from '../components/footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column1>
                        <Footer.Title><img src={require("../AasetLogo/Logo-Recovered-shadow2.png")} alt="" /></Footer.Title>
                        <Footer.Link href="#">Bang Eco adalah sebuah website yang bertujuan untuk memberikan edukasi tentang pengelolaan sampah dengan baik dan informasi terkini seputar sampah kepada masyarakat. Mulai dari edukasi mengenai cara pemisahan limbah atau sampah yang reusable dan zero waste, cara penerapan zero waste lifestyle hingga dampak-dampak positif dan negatif yang akan diterima kita sebagai manusia dan lingkungan.</Footer.Link>
                    </Footer.Column1>
                    <Footer.Column2>
                        <Footer.Title>MENU</Footer.Title>
                        <Footer.Link href="./">Beranda</Footer.Link>
                        <Footer.Link href="#edukasi">Edukasi</Footer.Link>
                        <Footer.Link href="#berita">Berita</Footer.Link>
                        <Footer.Link href="./ReqDonation">Donasi</Footer.Link>
                        <Footer.Link href="./PageAboutUs">Tentang Kami</Footer.Link>
                    </Footer.Column2>
                    <Footer.Column3>
                        <Footer.Title>HUBUNGI KAMI</Footer.Title>
                        <Footer.Link href="#telp">Telp: 08123456789</Footer.Link>
                        <Footer.Link href="#email">Email: bangeco@email.com</Footer.Link>
                        <Footer.Link href="#alamat">Alamat: Jl. Jendral Sudirman No.10, Jakarta</Footer.Link>
                        <Footer.Wrapper1>
                            <Footer.Column5><Footer.Link href="https://www.facebook.com/"><FacebookIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.twitter.com/"><TwitterIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.instagram.com/"><InstagramIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.linkedin.com/"><LinkedInIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                        </Footer.Wrapper1>
                    </Footer.Column3>
                </Footer.Row>
            </Footer.Wrapper>

            <Footer.Wrapper>
                <Footer.Column4>
                    <Footer.Link href="#">Copyright © 2022. Bang Eco. All rights reserved.</Footer.Link>
                </Footer.Column4>
            </Footer.Wrapper>
        </Footer>
    )
}