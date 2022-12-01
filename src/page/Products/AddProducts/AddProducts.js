import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = "bbc26cb719fd267fbc7db673766bdeb9";
  const handleProducts = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((ImageData) => {
        if (ImageData.success) {
          const products = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            location: data.location,
            image: ImageData.data.url,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            datPosted: data.datePosted,
            sellerName: data.sellerName,
          };
          // save doctor information
          fetch(`http://localhost:5000/porducts`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is Added successfully`);
              navigate("/products");
            });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center my-10">Add New Products</h1>
      <div className=" flex justify-center items-center">
        <div className="w-3/6 p-7 bg-slate-100 rounded-xl">
          <form onSubmit={handleSubmit(handleProducts)}>
            <div className="flex md:flex-row flex-col">
              <div className="form-control w-full max-w-xs mr-3">
                <label className="label">
                  {" "}
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  {...register("location", {
                    required: "password is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="form-control w-full max-w-xs mr-3">
                <label className="label">
                  {" "}
                  <span className="label-text">ResalePrice</span>
                </label>
                <input
                  type="text"
                  {...register("resalePrice", {
                    required: "password is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.resalePrice && (
                  <p className="text-red-500">{errors.resalePrice.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">OriginalPrice</span>
                </label>
                <input
                  type="text"
                  {...register("originalPrice", {
                    required: "password is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.originalPrice && (
                  <p className="text-red-500">{errors.originalPrice.message}</p>
                )}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="form-control w-full max-w-xs mr-3">
                <label className="label">
                  {" "}
                  <span className="label-text">DatePosted</span>
                </label>
                <input
                  type="text"
                  {...register("datePosted", {
                    required: "password is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.datePosted && (
                  <p className="text-red-500">{errors.datePosted.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">SellerName</span>
                </label>
                <input
                  type="text"
                  {...register("sellerName", {
                    required: "password is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.sellerName && (
                  <p className="text-red-500">{errors.sellerName.message}</p>
                )}
              </div>
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                {" "}
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                {...register("img", { required: true })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.img && <p className="text-red-500">Image is required</p>}
            </div>
            <input
              className="btn btn-secondary w-full my-4"
              value="Add Products"
              type="submit"
            />
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
