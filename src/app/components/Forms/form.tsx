"use client";

import { ReactElement, ReactNode, useDebugValue, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues }: FormProps) => {
  const formConfig: FormConfig = {};

  if (defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    submitHandler(data);
    reset();
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
