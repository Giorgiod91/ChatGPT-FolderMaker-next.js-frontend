import Image from "next/image";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className=" flex font-[family-name:var(--font-geist-sans)]">
      <section className="flex h-screen ">
        <LandingPage />
      </section>
    </div>
  );
}
