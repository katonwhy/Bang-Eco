import React from "react";
import DonationCard from "./Article";
import "./AllDonation.css";


const DonationArticle = () => {
    const slides = [
        {
            images:'https://picsum.photos/200/300',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/400/300',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/400',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/500',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/500/400',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/100',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/300/700',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/900',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/300/800',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        
    ];

        return(
            <>
            <p id="info-page">Informasi Donasi</p>
            <hr></hr>
            {slides.map((e)=> (
            <DonationCard
                key= {e.id}
                images = {e.images}
                organization={e.organization}
                title={e.title}
                description={e.description}

            />
            ))}
            </>
        );

};

export default DonationArticle;