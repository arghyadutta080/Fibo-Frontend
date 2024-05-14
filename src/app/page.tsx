import BarDiagram from "@/components/home/BarDiagram";
import Goals from "@/components/home/Goals";
import TopBar from "@/components/home/TopBar";

export default function Home() {
  return (
    <div className="">
      <TopBar />
      <Goals />
      <BarDiagram />
    </div>
  );
}
