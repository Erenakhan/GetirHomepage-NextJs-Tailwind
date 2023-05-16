

export default function Campaigns() {
  return (
     <div className=" m-auto w-[73rem] h-[16rem]"> <h1 className="w-full">Kampanyalar</h1>
      <div className="w-full h-full mt-5 flex"> 
      <img src="https://cdn.getir.com/getirweb-images/common/illustration/doodle.png" className=" absolute bg-primary h-[15.5rem] rounded-xl " alt=""  z-10 /> 

        <div className=" relative  w-[36.5rem] h-[15.5rem] rounded-xl  z-30  left-0  "> 


        <h4 className=" ml-12 mt-10 text-white font[600] text-3xl font-bold w-full text-left" >Getir'i indirin!</h4>
        <h2 className="ml-12 mt-2 text-white font[600] ">İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</h2>
           <div className="flex justify-center mt-2 w-full">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" 
            className="m-2" alt="" />
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            className="m-2"  alt="" />
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            className="m-2"  alt="" />
           </div>
        </div>
        <div className="relative  w-[36.5rem] h-[15.5rem] rounded-xl  z-30  right-0">
          <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"  className=" w-full h-full
          bg-auto bg-no-repeat" alt="" />
        </div>
        </div> 
      </div>
    
  )
}
