import Header from "@/components/layout/Header";
import CoreCourses from "@/components/widgits/CoreCourses";
import CoreSpecializations from "@/components/widgits/CoreSpecializations";
import { CoreTrack } from "@/components/widgits/CoreTrack";
import SpecializationTrack from "@/components/widgits/SpecializationTrack";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <CoreTrack />
      <CoreSpecializations />
      <CoreCourses />
      <SpecializationTrack />
    </main>
  );
}
