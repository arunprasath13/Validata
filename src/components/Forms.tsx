import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { User } from "../types/User";
import { toast } from "react-toastify";

const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  job: z.string().min(1, "Job is required"), 
});



const Forms = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  
  const onSubmit = async (data: User) => {
    try {
      const response = await axios.post("https://reqres.in/api/users", data);
      toast.success("User created successfully")
      console.log("User created successfully:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>

       
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Job</label>
            <input
              type="text"
              {...register("job")}
              placeholder="Enter your job title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.job && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.job.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
