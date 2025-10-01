import type { Route } from "./+types/home";
import { DogFeed } from "../components/DogFeed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Doggo Updates - Share Your Dog Sitting Journey" },
    { name: "description", content: "A fun way to share updates about the dogs you're sitting! Post photos, videos, and messages about your furry friends." },
  ];
}

export default function Home() {
  return <DogFeed />;
}
