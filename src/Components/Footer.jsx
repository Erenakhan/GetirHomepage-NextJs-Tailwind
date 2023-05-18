import { BsFacebook } from 'react-icons/Bs';
import { AiOutlineTwitter } from 'react-icons/Ai';
import { RxInstagramLogo } from 'react-icons/Rx';
import { BsGlobe2 } from 'react-icons/Bs';


export default function Footer() {
  return (
    <div className='m-auto grid grid-cols-5 " w-[80rem] h-[18rem] mt-20   '>
      <div className="w-72 h-full pl-6 ">
      <h3 className='font-[400] text-lg text-primary'>Getir'i indirin!</h3>
          <a href="">
          <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" 
            className="m-2" alt="" />
          </a>
           <a href="">
           <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            className="m-2"  alt="" />
           </a>
            <a href="">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            className="m-2"  alt="" />
            </a>
    
      </div>
      <div className="w-72 h-full pl-6  grid-cols-1">
      <h3 className='mb-3 font-[400] text-lg text-primary'>Getir'i keşfedin</h3>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Hakkımızda</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Kariyer</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Teknoloji Kariyerleri</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >İletişim</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Sosyal Sorumluluk Projeleri</div>
      </div>
      <div className="w-72 h-full pl-6 ">
      <h3 className='mb-3 font-[400] text-lg text-primary'>Yardıma mı ihtiyacınız var?</h3>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Sıkça Sorulan Sorular</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Kişisel Verilerin Korunması</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Gizlilik Politikası</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Kullanım Koşulları</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Çerez Politikası</div>
      </div>
      <div className="w-72 h-full pl-6 ">
      <h3 className='mb-3 font-[400] text-lg text-primary'>İş Ortağımız Olun</h3>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Bayimiz Olun</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Deponuzu Kiralayın</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >GetirYemek Restoranı Olun</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >GetirÇarşı İşletmesi Olun</div>
      <div href="" alt="" className='my-3 text-gray-800 text-sm' >Zincir Restoranlar</div>
      </div>
      <div className="w-72 h-full  ">
      <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" className='w-[4.5rem] h-[5.25rem] m-auto' />
      </div>


     <div className=' w-[80rem] h-6 flex justify-between'>
      <div className='w-fit text-sm font-[200] flex' >
      © 2023 Getir  <li className=' ml-5 text-primary'>Bilgi Toplumu Hizmetleri 
      </li>
      </div>
      <div className='w-fit text-sm font-[200] flex' >
      <BsFacebook className='w-5 h-5 text-gray-600 hover:text-primary mx-3' />
      <AiOutlineTwitter className='w-5 h-5 text-gray-600 hover:text-primary mx-3'/>
      <RxInstagramLogo className='w-5 h-5 text-gray-600 hover:text-primary mx-3'/>
      <BsGlobe2 className='w-5 h-5 text-gray-600 hover:text-primary ml-3' />
      <div className=' text-gray-600 hover:text-primary ml-1  font-[400]'>Türkçe (TR)</div>
      </div>
     </div>
    </div>
  )
}
