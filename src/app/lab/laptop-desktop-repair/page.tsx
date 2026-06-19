import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      Laptops and desktops are the core engines of work, study, and gaming. When a computer slows down, displays a blue screen, or suffers physical damage, it can bring your work to a grinding halt. At Nexus Mobile Tech, we provide comprehensive diagnostic and hardware repair services for MacBooks, iMacs, Windows laptops (Dell, HP, Lenovo, ASUS, Acer), and custom-built desktop PCs.
    </p>
    <p>
      Our technicians are experienced in resolving both hardware failures and software issues. We replace broken laptop screens, keyboards, trackpads, fans, and power jacks. If your machine is running slowly, we can upgrade your storage to ultra-fast SSDs or increase your system RAM to significantly boost performance. We also handle complex logic board repairs and micro-soldering to fix power issues on a chip level.
    </p>
    <p>
      We use advanced testing tools to ensure that operating systems are stable, thermals are under control, and all computer hardware works harmoniously. From data recovery and virus removal to hardware repairs and custom builds, we offer professional, transparent services at competitive rates, with no appointment needed.
    </p>
  `;

  const bulletPoints = [
    "Laptop Screen & Display Panel Swap",
    "Keyboard & Trackpad Replacement",
    "SSD Upgrades & Data Recovery",
    "RAM Upgrades & Motherboard Repairs",
    "Overheating Clean-up & Thermal Paste",
    "OS Reinstallation & Virus Removal",
  ];

  return (
    <LabTemplate
      title="Laptop & Desktop Repair"
      description="Complete hardware and software services for Mac and PC. Screen replacements, keyboard repairs, SSD upgrades, and logic board servicing."
      imageSrc="/images/laptop_repair.webp"
      content={content}
      bulletPoints={bulletPoints}
    />
  );
}
