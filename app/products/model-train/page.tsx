import Link from "next/link";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen flex flex-col">
      <main className="flex-grow min-h-[80vh] flex items-center pt-20 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-8">
            <span className="text-orange-600 text-sm font-medium">VisioX Solutions</span>
          </div>
          <h1 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Model Train
            </span>
          </h1>
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xl">
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
              Explore our Model Train solutions. VisioX provides cutting-edge AI-powered tools tailored for professional computer vision workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link href="/demo" className="px-12 py-5 bg-stone-900 text-white rounded-full font-bold transition-all hover:-translate-y-1 shadow-2xl text-center">Book a Demo</Link>
              <Link href="/contact" className="px-12 py-5 bg-white text-stone-900 border border-stone-200 rounded-full font-bold hover:bg-stone-50 transition-all shadow-sm text-center">Contact Sales</Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Overview</h3>
                </div>
                <p className="text-stone-600">Comprehensive features designed to optimize your Model Train processes with high efficiency and accuracy.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Key Benefits</h3>
                </div>
                <p className="text-stone-600">Scalable architecture, seamless integration, and advanced AI models tailored for your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
