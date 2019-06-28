/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { createRef } from 'react';
import { connect } from 'react-redux';
import dotenv from 'dotenv';
import axois from 'axios';
import { toast } from 'react-toastify';
import Div from './productStyles';
import { addProduct, getAproduct, updateProduct } from '../../store/actions/products';

const ProductForm = (props) => {
  dotenv.config();
  // eslint-disable-next-line react/prop-types
  const { id, user_id } = props;
  const nameRef = createRef();
  const description = createRef();
  const location = createRef();
  const priceRef = createRef();
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
        location: location.current.value,
        description: description.current.value,
        pictureURL: images,
      };
      // eslint-disable-next-line react/prop-types
      if (id) {
        props.updateProduct(id);
      } else {
        props.addProduct(productForm);
      }
    } else {
      toast.error('name price and image are required');
    }
  };
  let btnName = 'Add';
  const { update } = props;

  if (id && !update) {
    btnName = 'Update';
    props.getAproduct(id);
  }
  return (
    <Div>
      <form onSubmit={e => onSubmit(e)}>
        <input type="text" placeholder="name" ref={nameRef} name="name" defaultValue={update.name} />
        <input type="text" placeholder="description" ref={description} defaultValue={update.description} />
        <input type="file" placeholder="image" onChange={e => cloudinaryImageUploader(e)} />
        <input type="text" placeholder="location" ref={location} defaultValue={update.location} />
        <input type="text" placeholder="price" ref={priceRef} defaultValue={update.price} />
        <button type="submit">{btnName}</button>
      </form>
    </Div>
  );
};

const mapStateToProps = state => ({
  update: state.product.update,
});

export default connect(mapStateToProps, { addProduct, getAproduct, updateProduct })(ProductForm);
