
import { cookies } from "next/headers";

export function CookiesComponent() {
  const newCookies = cookies();
  console.log(newCookies.getAll());

  return (
    <p>Some data from cookies: {newCookies.someData}</p>
  );
}