"use client";


import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  className? : string,
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  className,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      ) : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <input
              type={type}
              className={className} 
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <input
              type={type}
              className={className} 
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;