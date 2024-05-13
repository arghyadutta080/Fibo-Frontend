import React from "react";
import { Footer, FooterLinkGroup } from "flowbite-react";
import { FooterRoutes } from "@/utils/constants/FooterRoutes";
import Link from "next/link";

const FooterComponent: React.FC = () => {
  return (
    <Footer
      container
      className=" bg-[#242424] bottom-0 absolute py-3 rounded-none mb-0"
    >
      <FooterLinkGroup className="flex justify-between">
        {FooterRoutes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
            className=" text-gray-500 hover:text-[#D15439] active:text-[#D15439]"
          >
            <div className="flex flex-col items-center text-xs">
              <route.icon size={30} />
              <span>{route.title}</span>
            </div>
          </Link>
        ))}
      </FooterLinkGroup>
    </Footer>
  );
};

export default FooterComponent;
