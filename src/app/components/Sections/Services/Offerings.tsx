import Listing from "../../Listing/Listing";

const OfferingsSection = () => {
  const offers = [
    {
      title: "Expert UI Conversion",
      description:
        "I'll meticulously translate your designs into pixel-perfect NextJS code, ensuring your vision is brought to life online.",
    },
    {
      title: "Modern Tech Stack",
      description:
        "Your website will be built using NextJS, the cutting-edge React framework known for its speed, SEO-friendliness, and developer experience.",
    },
    {
      title: "Responsive Design",
      description:
        "Your site will look fantastic and function seamlessly on all devices, from desktops to tablets and mobile phones.",
    },
    {
      title: "Landing Page Focus",
      description:
        "Need a powerful landing page to drive conversions? I specialize in creating engaging, results-oriented landing page experiences.",
    },
    {
      title: "Performance Optimization",
      description:
        "our website will be optimized for fast loading times, ensuring a smooth user experience.",
    },
    {
      title: "Tailwind CSS Magic",
      description:
        "(Optional) I'll leverage Tailwind CSS to create a clean, customizable, and highly performant design that aligns with your brand.",
    },
    {
      title: "Component Library",
      description:
        "(Optional) Choose Mantine: For a wide range of pre-built, customizable UI elements to streamline development and enhance design consistency. Other Libraries: We can discuss alternative component libraries or build custom components to perfectly match your design.",
    },
  ];
  return <Listing list={offers} />;
};

export default OfferingsSection;
