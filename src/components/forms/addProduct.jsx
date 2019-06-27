import React, { createRef } from 'react';
import { connect } from 'react-redux';
import dotenv from 'dotenv';
import axois from 'axios';
import { toast } from 'react-toastify';
import Div from './productStyles';
import { addProduct } from '../../store/actions/products';

const ProductForm = (props) => {
  dotenv.config();
  const { id, user_id} = props;
  const nameRef = createRef();
  const description = createRef();
  const location = createRef();
  const priceRef = createRef();
  // const user_id = createRef();
  let images;
  const cloudinaryImageUploader = async (e) => {
    const file = e.target.files[0];
    const url = 'https://api.cloudinary.com/v1_1/cristos/image/upload';
    const presept = 'zdupfz33';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presept);
    try {
      const response = await axois.post(url, formData);
      images = response.data.secure_url;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    if (name.trim() && price.trim()) {
      const productForm = {
        name,
        price,
        user_id,
        location,
        description,
        pictureURL: images,
      };
      props.addProduct(productForm);
    } else {
      toast.error('name and price are required');
    }
  };
  let btnName = 'Add';
  if (id) {
    btnName = 'Update';
  }
  return (
    <Div>
      <form onSubmit={e => onSubmit(e)}>
        <input type="text" placeholder="name" ref={nameRef} />
        <input type="text" placeholder="description" ref={description} />
        <input type="file" placeholder="image" onChange={e => cloudinaryImageUploader(e)} />
        <input type="text" placeholder="location" ref={location} />
        <input type="text" placeholder="price" ref={priceRef} />
        <button type="submit">{btnName}</button>
      </form>
    </Div>
  );
};

export default connect(null, { addProduct })(ProductForm);
