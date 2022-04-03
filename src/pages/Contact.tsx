import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <main id="main" className="mt-[92px] lg:mt-0">
            <div className="bg-center text-2xl md:text-[38px] uppercase text-gray-100 bg-pink-500 text-center mb-6 py-5">
                LIÊN HỆ
            </div>
            <div className="container">
            </div>
            <div className="container">
                <h3 className="my-12 text-xl">
                    <strong>Shop son môi nhận Ship hàng tại TPHCM, Hà Nội và các tỉnh thành
                        tại Việt Nam<br /></strong>
                </h3>
                <div className="p-4 mb-16" style={{ background: '#ffd7e4', padding: 10, borderRadius: 10 }}>
                    <h4 className="italic font-bold">Thông tin Shop Son Môi:</h4>
                    <ul className="list-disc ml-8">
                        <li className="mb-4 text-sm lg:text-base font-normal">
                            <span>Địa chỉ: 28 Tô Vĩnh Diện, Thủ Đức, HCM</span>
                        </li>
                        <li className="mb-4 text-sm lg:text-base font-normal">
                            <span>Hotline: 0888 75 80 85</span>
                        </li>
                        <li className="mb-4 text-sm lg:text-base font-normal">
                            <span>Fanpage:
                                <a href="#">https://fb.com/ShopSonMoiVietNam</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>

    )
}

export default Contact