import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea, error, ...props },
  ref,
) {
  // Base classes for styling the input or textarea element.
  const baseClasses =
    "w-full p-1 border-b-2 rounded-sm bg-stone-200 text-stone-600 focus:outline-none";
  // Additional classes to apply when there's an error.
  const errorClasses = "border-red-500";
  // Default classes for normal input state.
  const normalClasses = "border-stone-300 focus:border-stone-600";
  // Combine base classes with either errorClasses or normalClasses based on the error prop.
  const classes = `${baseClasses} ${error ? errorClasses : normalClasses}`;

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        // Render a textarea if the textarea prop is true.
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        // Render an input element otherwise.
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
