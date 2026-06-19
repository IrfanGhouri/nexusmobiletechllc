import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      Tablets are essential devices for productivity, creativity, and entertainment. When your iPad or Android tablet suffers a cracked screen, charging issues, or a dead battery, it can disrupt your entire routine. At Nexus Mobile Tech, we offer top-tier repair services for all Apple iPad models (including iPad Pro, iPad Air, iPad Mini, and standard iPad) as well as Samsung Galaxy Tabs and other leading Android tablet brands.
    </p>
    <p>
      Tablet repairs require specialized skills due to their compact internal layout and the extensive use of adhesives. Our laboratory is equipped with precision heat plates, suction tools, and laser machines to safely open your tablet, repair the internal components, and reseal it to factory-grade standards. We replace cracked glass digitisers, LCD/OLED display panels, swollen batteries, and broken charging ports.
    </p>
    <p>
      We source only high-quality, durable replacement parts that restore the vibrant display and sensitive touch response of your device. Every tablet repair is carefully tested for touch accuracy, battery health, and general performance before being returned to you. Drop by our labs in Cincinnati, OH, or Des Plaines, IL, and let our tech experts return your tablet to peak operating condition.
    </p>
  `;

  const bulletPoints = [
    "Digitizer (Glass) Replacement",
    "LCD & OLED Panel Repair",
    "Swollen & Dead Battery Swap",
    "USB-C & Lightning Port Repair",
    "Wi-Fi & Bluetooth Antenna Fix",
    "Headphone Jack Replacement",
  ];

  return (
    <LabTemplate
      title="iPad & Tablet Repair"
      description="Professional iPad and Android tablet repairs. We fix cracked digitizers, bleeding LCDs, charging ports, and dead batteries with expert precision."
      imageSrc="/images/ipad_repair.jpg"
      content={content}
      bulletPoints={bulletPoints}
    />
  );
}
