import { cn } from "@/lib/utils";
import {
  Linkedin,
  ExternalLink,
  Github,
  Newspaper, // Added Newspaper icon for blog
  Youtube, // Added Youtube icon
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Blog",
      link: portfolioConfig.socialLinks.blog,
      icon: <Newspaper />,
    },
    {
      name: "Youtube",
      link: portfolioConfig.socialLinks.youtube,
      icon: <Youtube />,
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: portfolioConfig.socialLinks.external,
      icon: <ExternalLink />,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
