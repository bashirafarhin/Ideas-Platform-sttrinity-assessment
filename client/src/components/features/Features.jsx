import FeatureCard from "./FeatureCard";

const featuresData = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop",
      title: "Team Collaboration",
      link: "#collaboration",
      ariaLabel: "Learn more about team collaboration features",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop",
      title: "Analytics Dashboard",
      link: "#analytics",
      ariaLabel: "Explore our analytics dashboard",
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop",
      title: "Cloud Integration",
      link: "#cloud",
      ariaLabel: "Discover cloud integration options",
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1000&fit=crop",
      title: "Mobile Access",
      link: "#mobile",
      ariaLabel: "Learn about mobile accessibility",
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1000&fit=crop",
      title: "Security First",
      link: "#security",
      ariaLabel: "View our security features",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
      title: "Real-time Updates",
      link: "#realtime",
      ariaLabel: "See real-time update capabilities",
    },
  ];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          image={feature.image}
          title={feature.title}
          link={feature.link}
          ariaLabel={feature.ariaLabel}
          cardClassName="aspect-[3/4]"
        />
      ))}
    </div>
  );
};

export default Features;