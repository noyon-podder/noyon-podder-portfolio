import React, { useState } from 'react';
import { FaCircle, FaGripLinesVertical, FaHashtag } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const PortfolioDetails = () => {
    
   const project = useLoaderData()
  const {title, date, description, features, technology, liveSite, sourceCode, subImages
  } = project; 
const [sliderData, setSliderData] = useState(subImages[0])
  const handleImage = index => {
    console.log(index)
    const slider = subImages[index]
    setSliderData(slider)
  }
    console.log(project)
    return (
        <div className="py-20">
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className=''>
               <div className='w-full h-80 overflow-hidden'>
               <img src={sliderData.value} alt="" className='w-full h-auto'/>
               </div>
                <div className='flex gap-3 pointer mt-5'>
                {
                subImages.map((data, i) => <img src={data.value} onClick={()=> handleImage(i)} alt="" height="70" width="100" className='cursor-pointer'/>
                )
                }
                </div>
            </div>
            <div>
                <div className="head flex items-center justify-between">
                    <h2 className='text-4xl text-white font-bold'>{title}</h2>
                    <span className=' text-sm'>{date}</span>
                </div>
            <p className='text-lg text-gray-300 mt-5'>{description}</p>
            <div className='my-5'>
               <a href={`${liveSite}`}> <button className='btn btn-xl btn-warning capitalize'>Live Website</button></a>
                <a href={`${sourceCode}`}>
                <button className='btn btn-xl btn-outline capitalize btn-warning ml-4'>Source Code</button>
                </a>
            </div>
            <div>
                <h6 className='text-white uppercase text-xl flex items-center'><FaGripLinesVertical className='text-red-500'/> Features</h6>

                <ul className='mt-5 ml-4'>
                    {
                        features.map((fe, i) => <li key={i} className="flex items-center  gap-2 text-lg text-gray-400"><FaCircle className='text-xs'/>{fe}</li>) 
                    }
                </ul>
            </div>
            <div className='mt-5'>
                <h6 className='flex items-center gap-2 text-white text-xl uppercase mb-4'><FaHashtag className='text-red-500'/> Technology</h6>

                {technology.map((tech, i) => <span key={i} className="text-lg capitalize ">{tech}, </span>)}
            </div>
            </div>
           </div>
        </div>
    );
};

export default PortfolioDetails;