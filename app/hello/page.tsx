import { sayHello } from "./utils";

export default function Hello() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-pink-500 text-3xl">
      {sayHello()}
    </div>
  );
}
