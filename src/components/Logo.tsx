import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="grid grid-cols-12 ">
          <div className='col-span-6'>
            <img src='http://diana.html.themeplayers.net/assets/images/demo-content/logo.png' alt='' />
          </div>
          <div className='col-span-6 grid grid-cols-6 m-auto' >

            <div className='col-span-2 grid grid-cols-4'>
             
            </div>

            <div className='col-span-2 grid grid-cols-4'>
              <div className='col-span-1 '>
                <img  className='ml-6' src='https://theme.hstatic.net/200000066044/1000820067/14/account-icon.png?v=98' width='60px' />
              </div>
              <div className='col-span-3 text-left'>
                <p className='hover:text-pink-400'>Tài khoản</p>
                <p className='hover:text-pink-400'>Đăng nhập</p>
              </div>
            </div>

            <div className='col-span-2 grid grid-cols-4'>
              <div className='col-span-1'>
                <img className='ml-5' src='https://theme.hstatic.net/200000066044/1000820067/14/cart-icon.png?v=98' width='45px' />
              </div>
              <div className='col-span-3 text-left'>
                <p className='hover:text-pink-400'>Giỏ hàng</p>
                
              </div>
            </div>
          </div>
        </div>
  )
}

export default Banner