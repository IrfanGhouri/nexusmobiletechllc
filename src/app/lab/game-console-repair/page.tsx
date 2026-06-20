import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      Don't let a faulty console disrupt your gaming sessions. At Nexus Mobile Tech, we offer expert repair services for PlayStation (PS4, PS5), Xbox (Xbox One, Xbox Series X/S), and Nintendo Switch consoles. Whether your system is overheating, failing to read discs, displaying no signal, or refusing to turn on, our technical specialists have the expertise to restore it to peak performance.
    </p>
    <p>
      Common console issues include HDMI port damage (which results in a blank screen), clogged cooling systems causing thermal shutdowns, laser lens failure in disc drives, and software corruption. Our laboratory features specialized micro-soldering gear to replace HDMI ports, repair power supplies, and solve board-level component issues. We also offer internal dust cleaning and thermal paste replacement.
    </p>
    <p>
      We use top-grade replacement parts, from HDMI ports to optical drives and cooling fans, ensuring your console runs cool and quiet. We test each console rigorously with actual games to ensure that HDMI signal, controller sync, disc reading, and cooling systems work perfectly. Bring your console to our Cincinnati workshops and get back to gaming!
    </p>
  `;

  const bulletPoints = [
    "HDMI Port & Connector Replacement",
    "Disc Drive & Optical Laser Repairs",
    "Thermal Cleaning & Liquid Metal Repaste",
    "Power Supply Unit (PSU) Repairs",
    "Nintendo Switch Joy-Con Drift Repair",
    "Hard Drive (HDD/SSD) Replacement",
  ];

  return (
    <LabTemplate
      title="Game Console Repair"
      description="Professional repairs for PS5, Xbox Series X/S, Nintendo Switch, and retro consoles. HDMI ports, overheating fixes, and optical drives repaired fast."
      imageSrc="/images/console_repair.webp"
      content={content}
      bulletPoints={bulletPoints}
    />
  );
}
