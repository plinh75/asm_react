import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <div>
      <div className="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10">
        Danh sách sản phẩm
      </div>
      <div className="container mb-8">
        <div className="bg-gray-100 p-2 rounded">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/"><i className="fa fa-home" /></a>
            </li>
          </ol>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        ${'{'}data.map((products) =&gt; /* html */`
        <div className="border-solid border-2 border-blue-200">
          <a href="/products/${products.id}"><img src="${products.img}" /></a>
          <h3 className="text-orange-900 font-bold text-center"><a href="/products/${products.id}">${'{'}products.name{'}'}</a></h3>
          <p className="p-3"></p>
        </div>
        `){'}'}
      </div>
    </div>

  )
}

export default Products