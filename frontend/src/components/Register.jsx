import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Create an account</h2>
              <p className="text-sm text-muted-foreground">
                Register with your Google account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-md border bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-50"
                  >
                    <FaGoogle size={16} />
                    Register with Google
                  </button>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-white px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <label
                      className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      autoComplete="true"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      focus-visible="border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      aria-invalid="ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="password"
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      focus-visible="border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      aria-invalid="ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 underline underline-offset-4"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              to="/TermsofService"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
