import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: { number: (string & { __isNumericString: true }) | "" }[];
  membershipPlan: "Basic" | "Standard" | "Premium";
  comments?: string;
};
const MembershipForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: [{ number: "" }],
      membershipPlan: "Basic",
      comments: "",
    },
  });
  const { register, handleSubmit, formState, control, reset } = form;
  const { errors, isSubmitSuccessful, isDirty } = formState;
  const { fields, append, remove } = useFieldArray({ control, name: "phoneNumber" });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }

    return () => {};
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form className="membership-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is required",
              },
            })}
          />
          <span className="error-message">{errors.firstName?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is required",
              },
            })}
          />
          <span className="error-message">{errors.lastName?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
              validate: {
                notAdmin: (value) => value !== "admin@email.com" || "Enter a valid email",
              },
            })}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="form-group">
          {fields.map((field, index) => {
            return (
              <div key={field.id} style={index > 0 ? { margin: "20px 0" } : {}}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register(`phoneNumber.${index}.number` as const, {
                    required: {
                      value: true,
                      message: "Phone Number is required",
                    },
                    pattern: {
                      value: /^\(\d{3}\) \d{3}-\d{4}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />

                {index > 0 && (
                  <button type="button" className="remove-phone" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            );
          })}
          <button type="button" className="add-phone" onClick={() => append({ number: "" })}>
            Add Phone Number
          </button>
          <span className="error-message">{errors.phoneNumber?.message}</span>
        </div>

        <div className="form-group">
          <label>Membership Plans:</label>
          <div className="radio-group">
            <label>
              <input type="radio" {...register("membershipPlan")} value="Basic" />
              Basic
            </label>
            <label>
              <input type="radio" {...register("membershipPlan")} value="Standard" />
              Standard
            </label>
            <label>
              <input type="radio" {...register("membershipPlan")} value="Premium" />
              Premium
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" rows={4} {...register("comments")} />
          <span className="error-message">{errors.comments?.message}</span>
        </div>

        <button type="submit" disabled={!isDirty}>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default MembershipForm;
