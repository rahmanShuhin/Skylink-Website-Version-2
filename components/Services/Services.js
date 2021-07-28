const Services = () => {
    return (
        <div className="services">
            <h2>Services</h2>
        </div>
    );
};

export default Services;

const services = [
    {
        id: 1,
        name: "Web development Services",
        category: [
            "Website development",
            "Business Website",
            "Startup Website",
            "Landing & promo sites",
            "E-commerce",
            "Wordpress development",
        ],
        languages: [
            "Javascript",
            "HTML5",
            "CSS3",
            "jQuery",
            "React Js",
            "Node Js",
            "mongoDB",
            "MySQL",
        ],
    },
    {
        id: 2,
        name: "Design Services",
        category: [
            "Website design",
            "UX, UI design",
            "Mobile App Design",
            "Logo Design",
        ],
        languages: ["Photoshop", "Figma", "Illustrator", "Adobe XD"],
    },
    {
        id: 3,
        name: "SEO Services",
        category: [
            "Tech SEO",
            "On-page SEO",
            "Off-page SEO",
            "SEO copywriting",
        ],
        languages: ["Google Analytics", "Webmaster tools"],
    },
    {
        id: 4,
        name: "Content Writing",
        category: [
            "Tech SEO",
            "On-page SEO",
            "Off-page SEO",
            "SEO copywriting",
        ],
        languages: ["Google Analytics", "Webmaster tools"],
    },
];
