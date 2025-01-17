import { useEffect } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormWrapperProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resetOnSubmit?: boolean;
} & TFormConfig;

const MKForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  resetOnSubmit = false,
}: TFormWrapperProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig['resolver'] = resolver;
  }
  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }

  const methods = useForm(formConfig);

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    if (resetOnSubmit) {
      methods.reset();
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default MKForm;
