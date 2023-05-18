import React from 'react'

export default function Banner() {
  return (
    <div className='m-auto w-[80rem] h-[22.5rem] mt-20 flex justify-around'>
      <div className='w-[22.5rem] h-full grid text-center py-6 border-zinc-500 shadow-md duration-400'>
        <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt=""
        className='m-auto'/>
        <h3 className='font-[600] text-lg text-primary'>Her siparişinize bir kampanya</h3>
        <p className='font-[400] text-md text-gray-500'>
        Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
        </p>
      </div>
      <div  className='w-[22.5rem] h-full grid text-center py-6 
       border-zinc-500 shadow-md duration-400'>
        <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt=""
        className='m-auto' />
        <h3 className='font-[600] text-lg text-primary'>Dakikalar içinde kapınızda</h3>
        <p className='font-[400] text-md text-gray-500'>
        Getir’le siparişiniz dakikalar içinde kapınıza gelir.
        </p>
      </div>
      <div className='w-[22.5rem] h-full grid text-center py-6 
       border-zinc-500 shadow-md duration-400"
      '>
        <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" 
        className='m-auto'/>
        <h3 className='font-[600] text-lg text-primary'>Binlerce çeşit mutluluk</h3>
        <p className='font-[400] text-md text-gray-500'>
        Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
        </p>
      </div>
      <div>
      </div>
    </div>
  )
}
