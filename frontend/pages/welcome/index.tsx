import React, {useState} from 'react';
import {RootState, AppDispatch} from "../../redux/store";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {Button, Carousel, CarouselItem} from "react-bootstrap";
import Cards from "../../components/Cards";
import SpaceBlock from "../../components/SpaceBlock";
import Catalog from "../catalog";
import withAuth from '../../hoc/withAuth';
// @ts-ignore
function Welcome() {
    const store = useAppSelector((state: RootState) => state.counter);
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };

    const data = [
        {
            src: './assets/card.jpg',
            caption: "Caption",
            description: "Description Here 1"
        },
        {
            src: './assets/card.jpg',
            caption: "Caption2",
            description: "Description Here  2"
        },
        {
            src: './assets/card.jpg',
            caption: "Caption3",
            description: "Description Here 3"
        }
    ]
    return (
        <div className="text-center main">
            <Catalog />
            <SpaceBlock height={'30px'}/>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, idx) => {
                    return (<Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={slide.src}
                            height={'300px'}
                            alt={slide.caption}
                        />
                        <Carousel.Caption>
                            <h3>{slide.caption}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
                })}
            </Carousel>
            {/*<p>{JSON.stringify(store)}</p>*/}
            {/*<Button variant='secondary' onClick={() => dispatch(getData())}>get data</Button>*/}
            <div className='take_courses'>
                <p>Take the best courses from <b>NU</b> prepared by NU profs)</p>
            </div>
            <>
                <Cards />
                <SpaceBlock height={'100px'}/>
            </>
        </div>
    );
}

export default withAuth(Welcome);