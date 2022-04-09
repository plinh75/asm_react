import React from 'react'
import { ProductType } from '../../types/Product'
import { Link } from 'react-router-dom'

type ProductAdminProps = {
    products: ProductType[]
    onRemove: (id: number) => void
}

const ProductAdmin = (props: ProductAdminProps) => {
    return (
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Product List</h6>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    <button className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <Link to="/admin/product/add" className="text-white text-capitalize no-underline">Add Product</Link>
                                    </button>
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Product Name</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Price</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Image</th>
                                                <th className="text-secondary opacity-7" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.products.map((item, index) => {
                                                return <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">{index + 1}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">{item.name}</p>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">{item.price}</p>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">{item.img}</p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/admin/product/${item._id}/edit`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </Link>
                                                        <button onClick={() => props.onRemove(item._id)} className="text-secondary font-weight-bold text-xs m-2" data-toggle="tooltip" data-original-title="Edit user">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProductAdmin