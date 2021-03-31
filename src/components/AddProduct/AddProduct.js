import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addProduct`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => console.log(res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
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
  //   console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="Product Name" ref={register({ required: true })} />
        <br />
        <input name="price" defaultValue="50" ref={register({ required: true })} />
        <br />
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
          ref={register({ required: true })}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;