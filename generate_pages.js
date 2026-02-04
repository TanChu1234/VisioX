const fs = require('fs');
const path = require('path');

const pages = [
    { path: 'app/products/datahub/page.tsx', title: 'DataHub' },
    { path: 'app/products/annotation/page.tsx', title: 'Annotation' },
    { path: 'app/products/model-train/page.tsx', title: 'Model Train' },
    { path: 'app/products/workflows/page.tsx', title: 'Workflows' },
    { path: 'app/products/deploy/page.tsx', title: 'Deploy' },
    { path: 'app/about/company/page.tsx', title: 'Company' },
    { path: 'app/about/blog/page.tsx', title: 'Blog' },
    { path: 'app/about/contact/page.tsx', title: 'Contact' }
];

function getTemplate(title) {
    return 'import Link from "next/link";\n' +
        'import Footer from "@/components/Footer";\n\n' +
        'export default function Page() {\n' +
        '  return (\n' +
        '    <div className="bg-[#fcfaf7] min-h-screen flex flex-col">\n' +
        '      <main className="flex-grow min-h-[80vh] flex items-center pt-20 pb-20 px-6 lg:px-8">\n' +
        '        <div className="max-w-7xl mx-auto">\n' +
        '          <div className="inline-block px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-8">\n' +
        '            <span className="text-orange-600 text-sm font-medium">VisioX Solutions</span>\n' +
        '          </div>\n' +
        '          <h1 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">\n' +
        '            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">\n' +
        '              ' + title + '\n' +
        '            </span>\n' +
        '          </h1>\n' +
        '          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xl">\n' +
        '            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">\n' +
        '              Explore our ' + title + ' solutions. VisioX provides cutting-edge AI-powered tools tailored for professional computer vision workflows.\n' +
        '            </p>\n' +
        '            <div className="flex flex-col sm:flex-row gap-6 mb-12">\n' +
        '              <Link href="/demo" className="px-12 py-5 bg-stone-900 text-white rounded-full font-bold transition-all hover:-translate-y-1 shadow-2xl text-center">Book a Demo</Link>\n' +
        '              <Link href="/contact" className="px-12 py-5 bg-white text-stone-900 border border-stone-200 rounded-full font-bold hover:bg-stone-50 transition-all shadow-sm text-center">Contact Sales</Link>\n' +
        '            </div>\n' +
        '            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">\n' +
        '              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">\n' +
        '                <div className="flex items-center gap-3 mb-4">\n' +
        '                  <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">\n' +
        '                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
        '                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />\n' +
        '                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />\n' +
        '                    </svg>\n' +
        '                  </div>\n' +
        '                  <h3 className="text-lg font-bold text-stone-900">Overview</h3>\n' +
        '                </div>\n' +
        '                <p className="text-stone-600">Comprehensive features designed to optimize your ' + title + ' processes with high efficiency and accuracy.</p>\n' +
        '              </div>\n' +
        '              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">\n' +
        '                <div className="flex items-center gap-3 mb-4">\n' +
        '                  <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">\n' +
        '                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
        '                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />\n' +
        '                    </svg>\n' +
        '                  </div>\n' +
        '                  <h3 className="text-lg font-bold text-stone-900">Key Benefits</h3>\n' +
        '                </div>\n' +
        '                <p className="text-stone-600">Scalable architecture, seamless integration, and advanced AI models tailored for your specific needs.</p>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </main>\n' +
        '      <Footer />\n' +
        '    </div>\n' +
        '  );\n' +
        '}\n';
}

pages.forEach(page => {
    const fullPath = path.join(__dirname, page.path);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, getTemplate(page.title));
    console.log('Created ' + page.path);
});
