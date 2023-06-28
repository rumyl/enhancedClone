import "../assets/styles/index.css";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


export default function Login() {
  return (
    <>
    <main className="grid place-items-center pt-7">

    <form className="flex max-w-md flex-col gap-4">
      <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Sign-in
            </p>
            </h5>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="name@flowbite.com"
          required
          shadow
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          id="password2"
          required
          shadow
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label
          className="flex"
          htmlFor="agree"
        >
          <p>
            Remember me
          </p>

        
        </Label>
      </div>
      <Button type="submit">
        Login
      </Button>
    </form>
      </main>
    </>
  )
}


