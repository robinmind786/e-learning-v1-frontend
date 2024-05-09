import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import elementSignin from "../../assets/images/element/02.svg";
import avatar1 from "../../assets/images/avatar/01.jpg";
import avatar2 from "../../assets/images/avatar/02.jpg";
import avatar3 from "../../assets/images/avatar/03.jpg";
import avatar4 from "../../assets/images/avatar/04.jpg";

const Signin = () => {
  return (
    <>
      <div className="w-full lg:grid lg:grid-cols-2 min-h-screen h-full">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <h2 className="prose-h2 mb-1">Welcome to our largest community</h2>
            <p className="text-sm text-muted-foreground">
              Let&apos;s learn something new today!
            </p>
          </div>
          <Image
            src={elementSignin}
            alt="Image"
            className="h-auto w-4/5 mx-auto"
          />
          <ul className="flex items-center py-6 justify-center">
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar1}
                alt="avatar1"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar2}
                alt="avatar2"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar3}
                alt="avatar3"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar4}
                alt="avatar4"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <div className="size-full object-cover rounded-full ring-2 ring-white bg-blue-500 flex items-center justify-center">
                <span className="text-white font-normal text-sm">1K+</span>
              </div>
            </li>
            <li className="ml-6">
              <p className="text-xs">
                4k+ Students joined us, now it&apos;s your turn.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Signin;
