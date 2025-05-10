import type { SVGProps } from "react";
import Image from "next/image";
export function SchoolLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <Image
      src={"/logo.png"}
      alt="logo"
      height={50}
      width={50}
      quality={100}
      priority
    />
  );
}
