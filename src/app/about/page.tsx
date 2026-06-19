import LabTemplate from "@/components/LabTemplate";

export default function Page() {
  const content = `
    <p>
      Founded with a vision to deliver premium, reliable, and swift electronic repairs, Nexus Mobile Tech has grown to become a trusted name in the industry. Operating with state-of-the-art labs, our laboratory workshops in Cincinnati, OH, and Des Plaines, IL, are staffed by certified technicians who share a passion for engineering excellence and outstanding customer service.
    </p>
    <p>
      We specialize in providing same-day repairs for smartphones, tablets, computers, and gaming systems, focusing on restoring them to original factory performance levels. Over the years, we have repaired thousands of screens, revived water-damaged motherboards, upgraded slow computers, and rescued critical data. We believe in transparency, which is why we offer free diagnostics and back every repair with an industry-leading warranty.
    </p>
    <p>
      In addition to our repair services, we provide a reliable marketplace to buy and sell certified pre-owned electronics. We purchase gently used iPhones and laptops for top cash and refurbish them for resale at affordable price points. At Nexus Mobile Tech, we don't just fix devices; we keep you connected to what matters most.
    </p>
  `;

  const bulletPoints = [
    "Certified Diagnostic Technicians",
    "State-of-the-Art Repair Laboratory",
    "Same-Day Services (Under 45 Mins)",
    "Highest-Quality Replacement Parts",
    "No Appointments Needed (Walk-Ins Welcome)",
    "Locally Owned & Operated Businesses",
  ];

  return (
    <LabTemplate
      title="About Nexus Mobile Tech"
      description="Learn about our mission, our technicians, and how we deliver industry-leading repairs and premium certified pre-owned devices daily."
      imageSrc="/images/about-us.webp"
      content={content}
      bulletPoints={bulletPoints}
      breadcrumbCategory="Company"
    />
  );
}
