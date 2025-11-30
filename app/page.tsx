import Image from "next/image";
import Header from "@/components/header/header";
import Main from "@/components/main/main"

export default function Home() {
  return (
    <div className="h-dvh">
      <Header />
      <Main />
    </div>
  );
}
