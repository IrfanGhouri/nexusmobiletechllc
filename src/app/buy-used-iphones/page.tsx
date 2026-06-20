import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      Looking for a high-end iPhone without the steep retail price tag? At Nexus Mobile Tech, we offer an exceptional selection of certified pre-owned and refurbished iPhones. Every iPhone we sell undergoes a rigorous 30-point diagnostics check, ensuring that key features like battery health, screen responsiveness, cameras, face ID, and speakers operate at 100% capacity.
    </p>
    <p>
      We stock a wide variety of models, from the recent iPhone 13 and 14 series up to the premium iPhone 15 Pro and 16 Pro Max. Our devices are unlocked and ready to activate on any carrier of your choice. To give you ultimate confidence in your purchase, we back every phone we sell with a standard Nexus Mobile Tech hardware warranty and a worry-free testing period.
    </p>
    <p>
      Have an old phone you'd like to trade in? We also buy used iPhones for cash on the spot! We offer top market rates based on your phone's condition, model, and storage capacity. Whether you want to buy a pristine-grade replacement or cash out your old device, visit our physical stores in Cincinnati, OH. Let's upgrade your mobile experience today!
    </p>
  `;

  const bulletPoints = [
    "Rigorous 30-Point Diagnostics Check",
    "Unlocked for All Major Network Carriers",
    "Pristine, Excellent & Mint Condition Grades",
    "Warranty Included on Every Purchase",
    "Top Cash Offers for Phone Trade-Ins",
    "Same-Day Purchase & Instant Setup",
  ];

  return (
    <LabTemplate
      title="Buy & Sell Used iPhones"
      description="Upgrade your phone for less. Premium, certified pre-owned iPhones unlocked and tested to factory perfection. Get instant cash for your trade-ins."
      imageSrc="/images/used_iphones.webp"
      content={content}
      bulletPoints={bulletPoints}
      breadcrumbCategory="Shop"
    />
  );
}
