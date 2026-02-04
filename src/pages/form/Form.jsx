import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import CreateData from "../utils/CreateData";

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.number().positive("Price must be > 0"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  categoryId: z.number().int("CategoryId must be an integer"),
  imageUrl: z.string().url("Invalid image URL"),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      categoryId: 1,
      imageUrl: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      // Convert imageUrl -> images array (API expects images: string[])
      const payload = { ...values, images: [values.imageUrl] };
      delete payload.imageUrl;

      await CreateData(payload);
      reset();
    } catch (e) {
      setError("root", { message: e?.message || "Failed to create product" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Create Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-start text-sm font-medium mb-1">
            Title
          </label>
          <input
            {...register("title")}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-start text-sm font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-start text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            rows={4}
            {...register("description")}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category ID */}
        <div>
          <label className="block text-start text-sm font-medium mb-1">
            Category ID
          </label>
          <input
            type="number"
            {...register("categoryId", { valueAsNumber: true })}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.categoryId && (
            <p className="mt-1 text-sm text-red-600">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-start text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            {...register("imageUrl")}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.imageUrl && (
            <p className="mt-1 text-sm text-red-600">
              {errors.imageUrl.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          className="w-full rounded bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Posting..." : "Create"}
        </button>

        {/* Form-level error */}
        {errors.root && (
          <p className="text-center text-sm text-red-600">
            {errors.root.message}
          </p>
        )}
      </form>
    </div>
  );
}
