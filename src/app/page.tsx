import HowWeWork from '@/components/HowWeWork';
import FeaturedFrameworks from '@/components/FeaturedFrameworks';
import HowWeCanHelp from '@/components/HowWeCanHelp';
import TechStack from '@/components/TechStack';
import WhoWeAre from '@/components/WhoWeAre';
import WhyTurnKey from '@/components/WhyTurnKey';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Main content - navbar overlays on top */}
      <div>
        {/* Hero section */}
        {/*
          * WHAT CHANGED:
          * 1. bg-[url('/turnkey_bg.png')]: Sets your background image. Make sure the path is correct.
          * 2. bg-cover: Ensures the image scales to cover the entire div.
          * 3. bg-bottom: This is the key change. It aligns the image to the bottom of the div,
          * so any cropping happens from the top.
        */}
        <div
          className="flex flex-col items-center py-64 bg-cover bg-bottom"
          style={{ backgroundImage: "url('/turnkey_bg.png')" }}
        >
          <div className="max-w-7xl w-full px-4">
            <h1 className="font-bold text-white text-center mb-4 display-xl">
              Make Compliance Your <span className="relative inline-block">
                <span className="absolute bottom-1 left-0 w-full h-6 opacity-80 transform -skew-x-12 bg-blue-500"></span>
                <span className="relative z-10">Competitive Advantage</span>
              </span>
            </h1>
            <h4 className="text-white/90 w-2/3 mx-auto text-center mb-16 font-light">
              Tailored to your business, not boxed into someone else&apos;s
            </h4>
            <div className="flex gap-6 w-2/3 flex-wrap mx-auto">
              <button className="flex-1 text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-white/20 shadow-lg flex items-center justify-center gap-2 min-w-[120px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
                  <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path>
                </svg>
                <span className="text-lg font-medium uppercase tracking-wide">Security</span>
              </button>
              <button className="flex-1 text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-white/20 shadow-lg flex items-center justify-center gap-2 min-w-[120px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
                  <path d="M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
                <span className="text-lg font-medium uppercase tracking-wide">Privacy</span>
              </button>
              <button className="flex-1 text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-white/20 shadow-lg flex items-center justify-center gap-2 min-w-[120px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
                  <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
                </svg>
                <span className="text-lg font-medium uppercase tracking-wide">AI</span>
              </button>
            </div>
            <div className="flex gap-6 w-2/3 mt-4 flex-wrap mx-auto">
              <button className="flex-1 bg-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors border border-white/20 shadow-lg min-w-[120px]">
                <span className="text-lg font-medium uppercase tracking-wide">Let&apos;s Talk</span>
              </button>
              <button className="flex-1 bg-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors border border-white/20 shadow-lg min-w-[120px]">
                <span className="text-lg font-medium uppercase tracking-wide">See How We Work</span>
              </button>
            </div>
          </div>

        </div>
 
        <HowWeCanHelp />

        <WhoWeAre />

        <FeaturedFrameworks />

        <HowWeWork />

        <WhyTurnKey />

        <TechStack />

        {/* Contact Form section */}
        <div className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column - Contact Us */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-turnkey)' }}>
                  Contact Us
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to get started with your compliance journey? We&apos;re here to help you navigate the complex world of regulatory requirements and get you audit-ready.
                </p>
              </div>

              {/* Right column - Contact Form */}
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="firstName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-background peer-focus:px-1 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500 peer-[&:not(:placeholder-shown)]:bg-background peer-[&:not(:placeholder-shown)]:px-1"
                      >
                        First Name
                      </label>
                    </div>

                    {/* Last Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-background peer-focus:px-1 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500 peer-[&:not(:placeholder-shown)]:bg-background peer-[&:not(:placeholder-shown)]:px-1"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-background peer-focus:px-1 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500 peer-[&:not(:placeholder-shown)]:bg-background peer-[&:not(:placeholder-shown)]:px-1"
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Company Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="companyEmail"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="companyEmail"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-background peer-focus:px-1 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500 peer-[&:not(:placeholder-shown)]:bg-background peer-[&:not(:placeholder-shown)]:px-1"
                    >
                      Company Email
                    </label>
                  </div>

                  {/* How can we help you? */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: 'var(--color-turnkey)' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
         </div>
       </div>
     </div>
   );
 }