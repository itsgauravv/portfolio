import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="grid grid-cols-1 text-left sm:grid-cols-3 gap-10">
      <ProjectCard
        img="/collaborative-live-docs.png"
        title="Collaborative Live Docs"
        description="A real-time collaborative document editor with rich text editing capabilities"
        stack="Next.js, TypeScript, Tailwind, Shadcn, Clerk, LiveBlocks"
        link="https://collaborative-live-docs.vercel.app/"
        github="https://github.com/itsgauravv/collaborative-live-docs"
      />
      <ProjectCard
        img="/podify.jpeg"
        title="Podify"
        description="Explore, create, and listen to podcasts powered by cutting-edge AI technologies!"
        stack="OpenAI, Next.js, TypeScript, Convex, Clerk, Tailwind, Shadcn"
        link="https://podify-podcasts.vercel.app"
        github="https://github.com/itsgauravv/podify"
      />
      <ProjectCard
        img="/anirev.jpeg"
        title="AniRev"
        description="A space for anime lovers to create, post, and read reviews with a sleek, minimalistic UI."
        stack="React 19, Sanity, Styled-Components, TypeScript"
        link="https://anirev.vercel.app"
        github="https://github.com/itsgauravv/anirev"
      />
    </div>
  );
};

export default ProjectSection;
