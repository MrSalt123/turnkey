export default function ContactForm() {
  return (
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
  );
}
