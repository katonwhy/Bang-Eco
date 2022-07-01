import React from "react";
import AllNewsCard from "./NewsArticle";
import "./AllNews.css";


const NewsArticle = () => {
    const slides = [
        {
            images:'https://picsum.photos/100/450',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/410/320',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/220/415',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/210/510',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/515/421',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/211/111',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/322/722',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/233/933',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/344/844',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },


    ];
        return(
            <>
            <p id="info-page">Semua Berita Terkini</p>
            <hr id="news"></hr>
            {slides.map((e)=> (
            <AllNewsCard
                key= {e.id}
                images = {e.images}
                author={e.author}
                title={e.title}
                description={e.description}

            />
            ))}
            </>
        );

};

export default NewsArticle;