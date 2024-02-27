import React from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


const Data = [
  {
    id:1,
    imgSrc: img,
    'destTitle': "Bora Bora",
    location: "New Zealand",
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Maldives',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:3,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:4,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:5,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:6,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:7,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:8,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },
  {
    id:9,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the option of romance,bora bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities',
  },

]


const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h4 className='title'>
          Most visited destination
        </h4>
      </div>
      <div className='setContent grid'>
        {
          Data.map((value, id,imgSrc,destTitle,location,grade,fees,description) => {
            return(
              <div key={id} className='singleDestination'>
                <div className='imageDiv'>
                  <img src={img} alt={destTitle} />
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{value.destTitle}</h4>
                  <span className='continent flex'><HiOutlineLocationMarker  className='icon'/>
                  <span className='name'>{value.location}</span></span>
                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{value.grade}<small>+1</small>
                      </span>
                    </div>
                    <div className='price'><h5>{value.fees}</h5></div>
                  </div>

                  <div className='desc'><p>{value.description}</p></div>
                  <button className='btn flex'>DETAILS <HiOutlineClipboardCheck className='icon' />
</button>
                </div>
              </div>
            )
          })
        }  
      </div>
    </section>
  )
}
export default Main 