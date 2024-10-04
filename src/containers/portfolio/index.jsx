import React, { useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeadercontent";
import imageone from '../../images/imageone.jpg'
import imagetwo from '../../images/imagetwo.jpg'
import imageothree from '../../images/imagethree.webp'
import imagefour from '../../images/imagefour.jpg'
import imagefive from '../../images/imagefive.webp'
import './styles.scss'



const portfolioData=[
    {
        id: 2,
        link : '',
        name: "Ecommerce",
        image: imageone
    },
    {
        id: 3,
        link : '',
        name: "Notes App",
        image: imagetwo
    },
    {
        id: 2,
        link : '',
        name: "suplier Design",
        image: imageothree
    },
    {
        id: 2,
        link : '',
        name: "Todo App",
        image: imagefour
    },
    {
        id: 3,
        link : '',
        name: "Shoping Cart Design",
        image: imagefive
    },

]

const filterData= [
    {
        filterId: 1,
        label : 'all'
    },
    {
        filterId: 2,
        label : 'Development'
    },
    {
        filterId: 3,
        label : 'Design'
    }
]


const Portfolio=()=>{

    const [filteredvalue,setFilteredValue] = useState(1)
    const [hoveredValue,setHoveredValue] = useState(null) 

    function handleFilter(currentId){
        setFilteredValue(currentId)
    };

    function handleHover(index){
       setHoveredValue(index)
    }

    console.log('----------------');
    console.log(hoveredValue);
    console.log('=====================');

    const filteredItems = filteredvalue === 1 ? portfolioData : 
    portfolioData.filter(item=>item.id === filteredvalue)
    console.log(filteredItems);

    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
 headerText= "My Portfolio"
    icon={<BsInfoCircleFill size={40}/>}
/>

<div className="portfolio__content">

    <ul className="portfolio__content__filter">
        {
    filterData.map(item=>(
        <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>

            {
                item.label
            }

        </li>
    ))
        }
    </ul>
    <div className="portfolio__content__cards"> 
   {
        filteredItems.map((item,index)=>(
            <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                onMouseEnter={()=>handleHover(index)}
                onMouseLeave={()=>handleHover(null)}
            >
                <div className="portfolio__content__cards__item__image-wrapper">

                    <a>
                        <img alt="dummmy data" src={item.image}/>
                    </a>

                </div>
                <div className="overlay">

                    {
                        index === hoveredValue && (
                            <div>
                                <p>{item.name}</p>
                                <button>Visit</button>
                            </div>
                        )
                    }
                </div>

            </div>

        ))
    }

    </div>
</div>

       </section>
    )
       
}
export default Portfolio;