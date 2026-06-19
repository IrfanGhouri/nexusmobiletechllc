import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      Find your next high-performance laptop at an unbeatable price. At Nexus Mobile Tech, we specialize in supplying certified pre-owned and refurbished laptops for students, professionals, and gamers. We carry an excellent selection of Apple MacBooks (Air and Pro with M1, M2, and M3 chips) as well as premium Windows notebooks from Dell, HP, Lenovo, and ASUS.
    </p>
    <p>
      Every computer in our inventory is thoroughly inspected by our diagnostic technicians. We test battery run-times, keyboard inputs, trackpad responsiveness, storage drive health (SSDs only), Wi-Fi connections, and screen display quality. We wipe each system and install a clean, licensed copy of macOS or Windows so that your laptop is ready to go as soon as you boot it up.
    </p>
    <p>
      In addition to selling laptops, we also buy clean used laptops for top-dollar cash. If you have an unwanted laptop or want to trade up to a faster model, bring it by our store for a free 10-minute valuation. All laptops sold by Nexus Mobile Tech are backed by our hardware warranty and professional setup support.
    </p>
  `;

  const bulletPoints = [
    "Apple Silicon MacBooks (M1, M2, M3)",
    "Dell XPS, ThinkPads & HP EliteBooks",
    "Clean Operating System Installations",
    "Rigorous Hardware Diagnostics Tests",
    "Fast Storage SSDs & Upgraded RAM",
    "Comprehensive Hardware Warranty",
  ];

  return (
    <LabTemplate
      title="Buy & Sell Used Laptops"
      description="Save big on premium laptops. Certified pre-owned MacBooks and Windows PCs, fully serviced and backed by our store warranty. Trade in for cash."
      imageSrc="/images/used_laptops.webp"
      content={content}
      bulletPoints={bulletPoints}
      breadcrumbCategory="Shop"
    />
  );
}
