// import { useForm } from "react-hook-form";
// import { useState } from "react";

// export default function Form() {
//   const [data, setData] = useState("");
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data, e) => {
//     e.preventDefault();
//     console.log(data);
//   };

//   return (
//     <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input
//         defaultValue="register"
//         {...register("exampleRequired", { required: true })}
//       />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }
