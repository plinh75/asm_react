import React, { useEffect} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/Product';

type EditInput = {
    name: string
    price: number
    img: string
}

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<EditInput>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);
    const onSubmit: SubmitHandler<EditInput> = data => {
        props.onUpdate(data)
        navigate("/admin/product");
    }
    return (
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="pt-5">
                        <div className="form-container">
                            <div className="right-content">
                                <h3 className="form-title">Update Product</h3>
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="text" className="form-control" {...register('name', { required: true })} />
                                        {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number" className="form-control" {...register('price')} />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" className="form-control" {...register('img')} />
                                    </div>
                                    <button className="bg-gradient-primary text-white shadow-primary border-radius-lg py-3 px-4">
                                       Update
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

export default ProductEdit