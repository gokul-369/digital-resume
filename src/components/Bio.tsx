import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { bio, fields, socialLinks } from "../data";
import type { JSX } from "react";

function Bio() {
  const iconMap: Record<string, JSX.Element> = {
    LinkedIn: <LinkedInLogoIcon />,
    GitHub: <GitHubLogoIcon />,
  };

  return (
    <section
      className="p-5 rounded-2xl h-[calc(100%-24rem)] flex flex-col bg-bgSecondary
    "
    >
      <>
        <span className="text-xl font-medium text-textprimary">{bio.name}</span>
        <span className="text-sm mt-1 text-textSecondary">{bio.title}</span>
        <span className="mt-2 text-xs">{bio.description}</span>
      </>

      <div className="mt-2 text-textSecondary"></div>
      <div className="mt-4">
        {fields.map((field) => (
          <div
            className="flex text-sm items-center justify-between gap-1 mt-2"
            key={field.name}
          >
            <span className="text-textprimary">{field.name}</span>
            <span className="text-textSecondary text-end">{field.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-2 text-textSecondary">
        {socialLinks.map((link) => (
          <a
            href={link.value}
            target="_blank"
            key={link.name}
            className="flex items-center gap-2"
          >
            {iconMap[link.name]}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Bio;
