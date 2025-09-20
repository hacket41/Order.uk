import { useForm } from "react-hook-form";
import PizzaBanner from "../assets/images/PizzaBanner.jpg";

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function JoinTheFamilyPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${PizzaBanner})` }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-wide">
            Join the Family
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-10 lg:gap-100">
        {/* Left Column (Text) */}
        <div className="flex flex-col items-start max-w-xl justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-left w-full">
            Employment and Franchising
          </h2>
          <p className="mb-8 text-left text-gray-500 text-base md:text-lg">
            Tell us what you can bring to our team and why you’d like to join
            us! Fill out the form to explore opportunities with the Food Corp
            family. We’re growing fast and always looking for passionate
            partners to help shape the future of food in Australia.
          </p>
        </div>

        {/* Right Column (Form) */}
        <div className="flex flex-col w-full max-w-xl p-6 shadow-2xl rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                {...register("subject")}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                {...register("message")}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none h-32"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
