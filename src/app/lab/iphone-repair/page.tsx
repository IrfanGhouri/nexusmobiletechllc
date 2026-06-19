import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      At Nexus Mobile Tech, we specialize in offering the absolute best and fastest iPhone repair services. Our highly certified technicians are fully equipped to diagnose and repair any model of Apple iPhone, from the classic legacy generations up to the absolute latest releases. We understand how crucial your iPhone is to your daily life, which is why we aim to complete most standard repairs, such as screen replacements and battery swaps, in under 45 minutes.
    </p>
    <p>
      We use only premium-grade, industry-standard replacement parts to ensure that your device functions exactly like it did when you first took it out of the box. Whether you are dealing with a cracked OLED screen, a battery that drains too fast, a faulty charging port, water damage, or audio issues like a blown speaker or non-responsive microphone, we have the specialized microsoldering tools and diagnostics equipment to fix it right the first time.
    </p>
    <p>
      Every repair performed in our lab is backed by a comprehensive warranty to give you peace of mind. We stand behind our workmanship and our parts because our ultimate goal is your complete satisfaction. Plus, there is no appointment necessary! You can simply walk into any of our convenient locations in Cincinnati, OH, or Des Plaines, IL, and get your iPhone evaluated and fixed by the leading repair professionals in the industry.
    </p>
  `;

  const bulletPoints = [
    "OLED & LCD Screen Replacement",
    "High-Capacity Battery Swap",
    "Charging Port Repair & Cleaning",
    "Water Damage Recovery",
    "Rear Glass & Frame Replacement",
    "Camera & Sensor Restorations",
  ];

  return (
    <LabTemplate
      title="iPhone Repair Services"
      description="Fast, premium, and reliable iPhone repairs backed by warranty. Cracked screens, battery issues, and charging ports resolved in under 45 minutes."
      imageSrc="/images/iphone_repair.webp"
      content={content}
      bulletPoints={bulletPoints}
    />
  );
}
