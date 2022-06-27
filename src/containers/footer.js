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
                        <Footer.Link href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </Footer.Link>
                    </Footer.Column1>
                    <Footer.Column2>
                        <Footer.Title>MENU</Footer.Title>
                        <Footer.Link href="./">Beranda</Footer.Link>
                        <Footer.Link href="#edukasi">Edukasi</Footer.Link>
                        <Footer.Link href="#koneksi">Koneksi</Footer.Link>
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
                            <Footer.Column5><Footer.Link href="https://www.facebook.com/"><FacebookIcon fontSize='large'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.twitter.com/"><TwitterIcon fontSize='large'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.instagram.com/"><InstagramIcon fontSize='large'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.linkedin.com/"><LinkedInIcon fontSize='large'/></Footer.Link></Footer.Column5>
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