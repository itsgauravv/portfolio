import { Accordion, AccordionItem } from "@heroui/accordion";
import { Avatar } from "@heroui/avatar";

export default function ExperienceSection() {
  const internshipContent =
    "As a Front-End Developer Intern at NinjaTech, I improved the platform’s look and feel by redesigning the UI to make it more modern and user-friendly. I also fixed over 30 design issues, making the platform easier to use and more enjoyable for users. This experience helped me learn how to build better interfaces and create smooth user experiences.";

  const developerContent =
    "As a Front-End Developer at NinjaTech, I worked on improving efficiency and user experience across the platform. I developed a Chrome Extension that provided instant access to Meta Ads data, making workflows faster and more seamless. I also automated a key module using OpenAI, which sped up processing and allowed the customer service team to assist more users. Additionally, I focused on performance optimization by fixing critical bugs, ensuring the application ran smoother and loaded faster.";

  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={["1"]}>
      <AccordionItem
        className="text-left py-5"
        key="1"
        aria-label="Frontend Developer"
        startContent={
          <Avatar isBordered color="primary" radius="lg" src="/company.jpeg" />
        }
        subtitle="May 2024 - Present"
        title={<p className="font-semibold">Frontend Developer</p>}
      >
        {developerContent}
      </AccordionItem>
      <AccordionItem
        className="text-left py-5"
        key="2"
        aria-label="Frontend Developer Intern"
        startContent={
          <Avatar isBordered color="default" radius="lg" src="/company.jpeg" />
        }
        subtitle="November 2023 - May 2024"
        title={<p className="font-semibold">Frontend Developer Intern</p>}
      >
        {internshipContent}
      </AccordionItem>
    </Accordion>
  );
}
