import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-8">
            <span className="text-orange-700 text-sm font-medium">VisioX Solutions</span>
          </div>
          <h1 className="text-5xl font-bold text-stone-900 mb-8 leading-tight">
            Contact
          </h1>
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xl">
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl">
              Explore our Contact solutions. VisioX provides cutting-edge AI-powered tools tailored for professional computer vision workflows.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Overview</h3>
                <p className="text-stone-600">Comprehensive features designed to optimize your Contact processes with high efficiency and accuracy.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Key Benefits</h3>
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
