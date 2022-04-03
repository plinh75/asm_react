import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

type AddProps = {
    name: string
    price: number
    img: string
}

type ProductAddProps = {
    onAdd: (product: AddProps) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddProps>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<AddProps> = (dataInput) => {
        props.onAdd(dataInput);
        console.log(dataInput);
        navigate("/admin/product");
    }
    return (

        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="pt-5">
                        <div className="form-container">
                            <div className="right-content">
                                <h3 className="form-title">Add Product</h3>
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="text" className="form-control" {...register('name')} />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number" className="form-control" {...register('price')} />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="text" className="form-control" {...register('img')} />
                                    </div>
                                    <button className="bg-gradient-primary text-white shadow-primary border-radius-lg py-3 px-4">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductAdd