import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  return (
    <main id="main" className="mt-[92px] lg:mt-0">
      <div className="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10">
        
      </div>
      <div className="container mb-8">
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[40%] flex">
            <div className="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <div className="w-full lg:w-[80%]">
                <img src="${data.img}" className="p-4 border border-solid border-gray-900 object-cover" />
              </div>
              <div className="w-[20%]">
                <img src="${data.img}" className="p-2 border border-solid border-gray-900 object-cover" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="mb-10">
              <h3 className="text-xl lg:text-3xl mb-2">
                
              </h3>
              <div className="flex items-center gap-8">
                <span className="text-base lg:text-2xl text-pink-500 text-center font-bold"></span>
              </div>
            </div>
            <div className="border-y border-solid border-gray-300 py-4">
              
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
export default ProductDetail