import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css"
import PublishIcon from '@material-ui/icons/Publish';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      variant: data.variant,
      imageURL: imageURL,
    };
    const url = `https://fashion-fare.herokuapp.com/addProduct`;
    // console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      alert("Data Added Successfully")
      // console.log(res)
    });
  };

  const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "8bc92ea2aef5c437abee8233cb8457b2");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-md-6 mb-2">
          <h6>Product Name</h6>
          <input
            name="name"
            className="w-75"
            placeholder="Product Name"
            ref={register({ required: true })}
          />
        </div>
        <div className="col-md-6">
          <h6>Product Price</h6>
          <input
            name="price"
            className="w-75"
            placeholder="Product Price"
            ref={register({ required: true })}
          />
        </div>
        <div className="col-md-6">
          <h6>Select Variant</h6>
          <select
            name="variant"
            className="w-75"
            ref={register({ required: true })}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="col-md-6 button-wrap">
          <h6>Upload Photo</h6>
          <label className="new-button" htmlFor="exampleRequired">
           <PublishIcon/> Upload Photo
          </label>

          <input
            className="w-75"
            placeholder="Select Variant"
            name="exampleRequired"
            id="exampleRequired"
            type="file"
            onChange={handleImageUpload}
            ref={register({ required: true })}
          />
          <div className="w-75">
          <input type="submit" />
        </div>
        </div>

        
      </form>
    </div>
  );
};

export default AddProduct;
