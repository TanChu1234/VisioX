export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900">
      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
                <span className="text-orange-700 text-sm font-medium">✨ Next-Gen Visual Platform</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                <span className="bg-[#E66700] bg-clip-text text-transparent animate-pulse">
                  Intelligent Computer Vision Platform
                </span>
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                Transform your visual data into actionable insights with our cutting-edge AI-powered annotation and analysis tools. Built for teams of any scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group w-full sm:w-52 h-14 px-6 bg-gradient-to-r from-[#FF7300] to-[#F1A222] hover:from-[#E66700] hover:to-[#D9911C] hover:scale-105 active:scale-95 text-white rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30">
                  <span>Start Free Trial</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                <button className="w-full sm:w-52 h-14 px-6 bg-stone-100 hover:bg-stone-200 hover:scale-105 active:scale-95 text-stone-900 rounded-xl transition-all duration-300 font-semibold border border-stone-200 backdrop-blur-sm flex items-center justify-center">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
                <div>
                  <div className="text-3xl font-bold text-stone-900">50K+</div>
                  <div className="text-sm text-stone-500">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-stone-900">1M+</div>
                  <div className="text-sm text-stone-500">Annotations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-stone-900">99.9%</div>
                  <div className="text-sm text-stone-500">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Demo Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 border border-stone-200 shadow-xl">
                {/* Toolbar */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-xl p-3 space-y-4 border border-stone-200 shadow-lg">
                  <button className="w-10 h-10 bg-[#FF7300] rounded-lg flex items-center justify-center hover:bg-[#E66700] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center hover:bg-stone-200 transition-colors">
                    <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center hover:bg-stone-200 transition-colors">
                    <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </button>
                </div>

                {/* Main Content Area */}
                <div className="bg-stone-100 rounded-xl aspect-[4/3] relative overflow-hidden border border-stone-200">
                  {/* Placeholder for demo image/visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                      {/* Simulated bounding boxes */}
                      <div className="absolute top-[20%] left-[15%] w-[30%] h-[40%] border-2 border-[#FF7300] rounded-lg">
                        <div className="absolute -top-6 left-0 bg-[#FF7300] px-2 py-1 rounded text-xs text-white">Object 1</div>
                      </div>
                      <div className="absolute top-[40%] right-[20%] w-[35%] h-[35%] border-2 border-[#F1A222] rounded-lg">
                        <div className="absolute -top-6 left-0 bg-[#F1A222] px-2 py-1 rounded text-xs text-white">Object 2</div>
                      </div>

                      {/* Grid overlay effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom control bar */}
                <div className="mt-4 flex items-center justify-between bg-stone-50 rounded-lg px-4 py-3 border border-stone-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-stone-600">Processing...</span>
                  </div>
                  <div className="text-sm text-stone-500">Frame 1 / 100</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200/50 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-200/50 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Powerful Features</h2>
            <p className="text-stone-600 text-lg">Everything you need for professional computer vision work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Lightning Fast</h3>
              <p className="text-stone-600">Process thousands of images with optimized performance and real-time collaboration.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Secure & Private</h3>
              <p className="text-stone-600">Enterprise-grade security with data encryption and compliance standards.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Smart Annotation</h3>
              <p className="text-stone-600">AI-assisted tools that speed up your workflow with intelligent suggestions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
