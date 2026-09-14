import { redirect } from "next/navigation";

const TARGET_URL = "https://studio-youtube.vercel.app/";

export default function Home() {
  redirect(TARGET_URL);
}
