import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h2 className="text-white text-left mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-12 ">
                Let&apos;s discuss how TurnKey Compliance can help you build a stronger, more effective compliance program.
                Get in touch with our experts today.
              </p>
              <Link href="https://outlook.office.com/bookwithme/user/9527971fc7584d2cb090be7016fb4b80%40turnkeycompliance.net?anonymous&ismsaljsauthenabled=true" target="_blank" className="bg-white text-black px-8 py-3 rounded-2xl font-medium">
                Schedule a Consultation
              </Link>
            </div>

            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/help.png"
                  alt="TurnKey Compliance Team Strategy"
                  width={512}
                  height={448}
                  className="hidden md:block relative z-10 w-full max-w-lg object-cover h-112 rounded-tl-4xl rounded-br-4xl"
                />
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full rounded-tl-4xl rounded-br-4xl"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* CTA Section */}

    </div>
  );
}
