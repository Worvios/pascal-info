import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundColor: '#A5A3FF' }} // pascalPurple
      >
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/school-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Pascal School</h1>
          <p className="text-xl mb-8">Shaping Futures, Building Leaders</p>
          <div className="space-x-4">
            <Link
              href="/register"
              className="bg-[#3b82f6] px-6 py-3 rounded-md text-white hover:bg-[#2563eb] transition-colors" // AccentBlue
            >
              Register Now
            </Link>
            <Link
              href="/login"
              className="bg-transparent border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-[#3b82f6] transition-colors" // AccentBlue
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section
        className="py-16 px-8 text-center"
        style={{ backgroundColor: '#d1fae5' }} // SoftGreen
      >
        <h2 className="text-3xl font-bold mb-4">About Our School</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Pascal School is dedicated to providing a holistic education that nurtures the mind, body, and soul. Established in 1990, we have a rich history of academic excellence and community engagement.
        </p>
        <Link
          href="/about"
          className="bg-[#A8D695] px-6 py-3 rounded-md text-white hover:bg-[#8BC34A] transition-colors" // pascalGreen
        >
          Learn More
        </Link>
      </section>

      {/* Why Choose Us? */}
      <section
        className="py-16 px-8"
        style={{ backgroundColor: '#B8E3FF' }} // pascalBlueLight
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#FDF1A8' }}> {/* pascalYellowLight */}
            <h3 className="text-xl font-bold mb-4">Experienced Faculty</h3>
            <p>Our teachers are highly qualified and dedicated to student success.</p>
          </div>
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#DDD9FF' }}> {/* pascalPurpleLight */}
            <h3 className="text-xl font-bold mb-4">Modern Infrastructure</h3>
            <p>State-of-the-art facilities to support learning and growth.</p>
          </div>
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F9C6D3' }}> {/* pascalPink */}
            <h3 className="text-xl font-bold mb-4">Holistic Education</h3>
            <p>We focus on academic, physical, and emotional development.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 px-8"
        style={{ backgroundColor: '#FAE27C' }} // pascalYellow
      >
        <h2 className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#F5A3A3' }}> {/* pascalRed */}
            <p className="italic">"Pascal School has transformed my child’s future. The teachers are amazing!"</p>
            <p className="mt-4 font-bold">— John Doe, Parent of Class 10 Student</p>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8C547' }}> {/* pascalGold */}
            <p className="italic">"The facilities and extracurricular activities are top-notch."</p>
            <p className="mt-4 font-bold">— Jane Smith, Parent of Class 8 Student</p>
          </div>
        </div>
      </section>

      {/* School Staff */}
      <section
        className="py-16 px-8 text-center"
        style={{ backgroundColor: '#7CCFFA' }} // pascalBlue
      >
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#FBCFE8' }}> {/* LightPink */}
            <img src="/staff1.jpg" alt="Principal" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Principal</h3>
            <p>Dr. Sarah Johnson</p>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#93C5FD' }}> {/* SoftBlue */}
            <img src="/staff2.jpg" alt="Vice Principal" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Vice Principal</h3>
            <p>Mr. David Smith</p>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#FDBA74' }}> {/* AccentOrange */}
            <img src="/staff3.jpg" alt="Head of Academics" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Head of Academics</h3>
            <p>Ms. Emily Brown</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        className="py-16 px-8 text-center"
        style={{ backgroundColor: '#e5e7eb' }} // LightGray
      >
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="mb-8">We’d love to hear from you! Reach out to us for any inquiries.</p>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded-md border border-gray-300"
              rows={4}
            />
            <button
              type="submit"
              className="bg-[#4b5563] px-6 py-3 rounded-md text-white hover:bg-[#374151] transition-colors" // DarkGray
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{ backgroundColor: '#4b5563', color: '#fff' }} // DarkGray
      >
        <p>© 2024 Pascal School. All rights reserved.</p>
      </footer>
    </div>
  );
}