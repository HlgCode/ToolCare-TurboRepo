import * as React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src="https://snz04pap002files.storage.live.com/y4mMjaLNnPm0hdk3CLOEvU6V3lSCuugamMelMjRHn5fsjftlYKeerEyO98hYwvAwJld4DfJrcLo1bFXm32AS1_GERl7BSn1CMtmWi-LNnrz_awwJqlh2hWvW8jvh6KPhyNr5XWfktL9Mw3ppkhVZg3qzfgK5dGWgRV7ZX6oLBzY4_UCeS5nDCO6-aa875hVamCXWlfYylucSoEkwbCbUvZQGPhH86vazuAplN7RUErPbvQ?encodeFailures=1&width=282&height=152"
          alt="Logo"
        />
      </div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your credentials.
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          /> */}
          <Button className="mt-6" fullWidth>
            Login
          </Button>
          {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography> */}
        </form>
      </Card>
    </>
  );
};
