import "../assets/styles/index.css";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


export default function Registration() {
  return (
    <>
    <main className="grid place-items-center pt-7">


    <form className="flex max-w-md flex-col gap-4">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Sign-up
            </p>
            </h5>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div>
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
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
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
            I agree with the 
          </p>

            <p>
              &nbsp;terms and conditions
            </p>
         
        </Label>
      </div>
      <Button type="submit">
        Register new account
      </Button>
    </form>
      </main>
    </>
  )
}


