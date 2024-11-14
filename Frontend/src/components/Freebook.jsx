import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const [filterData, setFilterData] = useState([]);

    // Fetch the data from the public folder
    useEffect(() => {
        fetch('/list.json')
            .then((response) => response.json())
            .then((data) => {
                const freeItems = data.filter(item => item.category === "Free");
                setFilterData(freeItems);
            })
            .catch((error) => console.error("Error loading list.json:", error));
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-bold text-xl pb-2">Free Offered Course</h1>
                    <p>
                        Here is a selection of free courses that can help you prepare for the IUT admission test.
                    </p>
                </div>
                
                <div>
                    {filterData.length > 0 ? (
                        <Slider {...settings}>
                            {filterData.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))}
                        </Slider>
                    ) : (
                        <p>Loading courses...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Freebook;
