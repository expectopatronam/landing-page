"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-scroll";
import Image from 'next/image';


interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface Review {
  name: string;
  company: string;
  review: string;
  rating: number;
  position: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Home: React.FC = () => {
  const services: Service[] = [
    {
      title: "Design",
      description: "UI/UX design, wireframing, and prototyping to create intuitive and engaging user experiences.",
      features: ["User Interface Design", "User Experience Design", "Prototype Development", "Brand Identity"],
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Full-stack development services using cutting-edge technologies to bring your vision to life.",
      features: ["Web Development", "Mobile Apps", "Custom Software", "API Integration"],
      icon: "💻"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and debugging to ensure your product meets the highest quality standards.",
      features: ["Automated Testing", "Performance Testing", "Bug Fixing", "Security Testing"],
      icon: "✅"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online presence and reach.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics"],
      icon: "📈"
    }
  ];

  const reviews: Review[] = [
    {
      name: "John Smith",
      company: "Tech Innovators Ltd",
      review: "MySofty delivered exceptional results for our web application. Their attention to detail and commitment to quality is outstanding.",
      rating: 5,
      position: "CTO"
    },
    {
      name: "Sarah Johnson",
      company: "Digital Solutions Inc",
      review: "The team's expertise in both design and development helped us launch our product ahead of schedule. Highly recommended!",
      rating: 5,
      position: "Product Manager"
    },
    {
      name: "Michael Chen",
      company: "StartUp Hub",
      review: "Their SEO services have significantly improved our online presence. We've seen a 200% increase in organic traffic.",
      rating: 5,
      position: "Marketing Director"
    },
    {
      name: "Emma Davis",
      company: "Creative Works",
      review: "Outstanding service from start to finish. MySofty understood our vision and transformed it into reality.",
      rating: 5,
      position: "CEO"
    }
  ];

  const [currentReview, setCurrentReview] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const nextReview = (): void => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = (): void => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800/95 shadow-md text-white z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-around items-center">
            {["home", "products", "reviews", "contact", "about"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                className="font-bold hover:text-blue-400 transition-colors cursor-pointer capitalize"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 pt-32 px-2 py-20 bg-white">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl md:w-1/2">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {/* Removed MySofty */}
          </h1>
          <p className="text-4xl mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold">
            Turn your ideas to software in 30 days. Your idea, we execute the business, you just sit back and relax.
          </p>
          <p className="text-xl mb-10 text-gray-700">
            Our streamlined process ensures that your project is completed on time and within budget. We handle everything from initial concept to final deployment, providing regular updates and incorporating your feedback every step of the way.
          </p>
          <p className="text-xl text-gray-700">
            With a dedicated team of experts, cutting-edge technology, and a commitment to excellence, we make the software development process easy and stress-free for you.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/tech-company-concept-illustration-b.png" // Ensure this path is correct
            alt="Tech Illustration"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="w-full h-auto max-w-lg rounded-lg"
          />
        </div>
      </section>


      {/* Services Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-16">End-to-End Software Solutions</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 border-b border-gray-200 pb-2">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Client Testimonials</h2>

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full border-2 border-gray-600 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors"
            >
              &lt;
            </button>

            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 max-w-2xl">
              <div className="text-2xl mb-4">{"⭐".repeat(reviews[currentReview].rating)}</div>
              <p className="text-lg text-gray-800 mb-8">{reviews[currentReview].review}</p>
              <div className="border-t border-gray-300 pt-6">
                <h3 className="font-bold text-xl text-gray-800">{reviews[currentReview].name}</h3>
                <p className="text-gray-600">{reviews[currentReview].position}</p>
                <p className="text-gray-500">{reviews[currentReview].company}</p>
              </div>
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full border-2 border-gray-600 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors"
            >
              &gt;
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentReview === index ? "bg-gray-800" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-center text-gray-600 mb-16">Lets discuss your next project</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors min-h-[150px]"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Section</h2>
          <p className="text-xl text-gray-600">Learn more about our journey!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;