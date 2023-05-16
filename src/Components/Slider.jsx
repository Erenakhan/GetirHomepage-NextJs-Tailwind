import Slider from "react-slick";
import  { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function Slide() {
  const [selected, setSelected] = useState("TR");
  const [value,setValue] = useState(5);

  const phones = {
    US : "+1",
    TR : "+90",
    Fr : "+33",
    DE : "+49",
    Pl : "+48",
    Gb : "+44",
    IT : "+39",
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div className='relative h-[300] before:bg-gradient-to-r before:from-primary  before:absolute before:top-0 before:w-full before:h-full before:z-10  '>
        <Slider {...settings}>
          <div>
           <img className='w-full h-[400] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="a"></img>
          </div>  
          <div> 
           <img className='w-full h-[400] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="a"></img>
          </div>      
          <div>
           <img className='w-full h-[400] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="a"></img>
          </div>      
          <div>
           <img className='w-full h-[400] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="a"></img>
          </div>                                                
        </Slider>
        
        <div className="flex conteiner">
              <div className="container text-white absolute top-0 h-full z-20 w-1/2 text-left left-0 pl-[13rem] pt-[8rem] ">
                <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt=""
                className="w-[180] h-[180] "/>
                <h1 className="text-4xl font-[650] mt-10  w-fit">Dakikalar içinde <br /> kapınızda</h1>
              </div>
              <div className="container w-100 text-white absolute top-0 h-full z-20 w-1/2 text-left right-0">
                    <div className="border-2  rounded-xl bg-white  mx-auto mt-[10rem] w-[25rem] h-[13rem] ">
                      <h4 className="text-primary font[600] text-lg font-semi-bold w-full text-center w-full my-5" >Giriş yap veya kayıt ol</h4>
                      <div className="flex">
               <ReactFlagsSelect
           countries={Object.keys(phones)}
            onSelect={code => setSelected(code)}
           selected={selected}
           className="w-fit rounded-sm ml-3 focus:bg-primary border-gray-300"
/>
                  <label className="w-full flex  relative mx-1 h-11  ">
                  <input required className="text-black w-full h-full border-2 focus:outline-none text-sm  focus:border-primary border-gray-300 rounded-sm peer pt-2 "   />
                  <span className="text-gray-400 absolute text-sm top-3 ml-1 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-valid:top-0 peer-valid:text-xs peer-valid:text-primary transition-all ">Telefon Numarası</span>
                  </label>
                    </div>
                    <div className=" flex justify-center mt-2  h-12 w-full">
                    <button className="  text-primary bg-brand-yellow focus:text-brand-yellow focus:bg-primary  hover:text-brand-yellow hover:bg-primary w-[23rem] h-full   rounded-lg transition-all">
                      Telefon Numarası İle Devam Et
                    </button>
                    </div>
              
                    </div>
              </div>
        </div>
  </div>
      
  )
}

