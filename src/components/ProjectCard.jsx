import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import React from "react";

const ProjectCard = ({ img, title, description, stack, github, link }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden  flex flex-col hover:shadow-2xl transition duration-300">
      <div className="w-full border">
        <img src={img} className="w-full h-[200px]" alt="project-thumbnail" />
      </div>
      <div className="flex flex-col gap-10 p-5">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Tech Stack:</p>
          <p className="text-sm">{stack}</p>
        </div>
        <div className="flex justify-end gap-4 items-center">
          {github && (
            <Button
              as={Link}
              href={github}
              isIconOnly
              variant="light"
              className="border"
            >
              <img height={28} width={28} alt="github-logo" src="/github.png" />
            </Button>
          )}
          {link && (
            <Button
              as={Link}
              href={link}
              isIconOnly
              variant="light"
              className="border"
            >
              <img height={28} width={28} alt="github-logo" src="/link.png" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
