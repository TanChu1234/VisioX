const fs = require('fs');
const path = require('path');

const pages = [
    { path: 'app/products/datahub/page.tsx', title: 'DataHub' },
    { path: 'app/products/annotation/page.tsx', title: 'Annotation' },
    { path: 'app/products/model-train/page.tsx', title: 'Model Train' },
    { path: 'app/products/workflows/page.tsx', title: 'Workflows' },
    { path: 'app/products/deploy/page.tsx', title: 'Deploy' },
    { path: 'app/solutions/manufacturing-industrial/page.tsx', title: 'Manufacturing & Industrial' },
    { path: 'app/solutions/surveillance-security/page.tsx', title: 'Surveillance & Security' },
    { path: 'app/solutions/transportation-smart-cities/page.tsx', title: 'Transportation & Smart Cities' },
    { path: 'app/solutions/healthcare-medical/page.tsx', title: 'Healthcare & Medical' },
    { path: 'app/solutions/retail-commerce/page.tsx', title: 'Retail & Commerce' },
    { path: 'app/solutions/smart-agriculture/page.tsx', title: 'Smart Agriculture' },
    { path: 'app/solutions/robotics-automation/page.tsx', title: 'Robotics & Automation' },
    { path: 'app/solutions/logistics-warehousing/page.tsx', title: 'Logistics & Warehousing' },
    { path: 'app/solutions/entertainment-sports/page.tsx', title: 'Entertainment & Sports' },
    { path: 'app/about/company/page.tsx', title: 'Company' },
    { path: 'app/about/blog/page.tsx', title: 'Blog' },
    { path: 'app/about/contact/page.tsx', title: 'Contact' },
];

function getTemplate(title) {
    return 'import Footer from "@/components/Footer";\n\n' +
        'export default function Page() {\n' +
        '  return (\n' +
        '    <div className="bg-[#fcfaf7] min-h-screen flex flex-col">\n' +
        '      <main className="flex-grow pt-32 pb-20 px-6 lg:px-8">\n' +
        '        <div className="max-w-7xl mx-auto">\n' +
        '          <div className="inline-block px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-8">\n' +
        '            <span className="text-orange-700 text-sm font-medium">VisioX Solutions</span>\n' +
        '          </div>\n' +
        '          <h1 className="text-5xl font-bold text-stone-900 mb-8 leading-tight">\n' +
        '            ' + title + '\n' +
        '          </h1>\n' +
        '          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xl">\n' +
        '            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl">\n' +
        '              Explore our ' + title + ' solutions. VisioX provides cutting-edge AI-powered tools tailored for professional computer vision workflows.\n' +
        '            </p>\n' +
        '            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">\n' +
        '              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">\n' +
        '                <div className="flex items-center gap-3 mb-4">\n' +
        '                  <div className="w-8 h-8 bg-orange-100 text-[#FF7300] rounded-lg flex items-center justify-center">\n' +
        '                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
        '                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />\n' +
        '                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />\n' +
        '                    </svg>\n' +
        '                  </div>\n' +
        '                  <h3 className="text-xl font-bold text-stone-900">Overview</h3>\n' +
        '                </div>\n' +
        '                <p className="text-stone-600">Comprehensive features designed to optimize your ' + title + ' processes with high efficiency and accuracy.</p>\n' +
        '              </div>\n' +
        '              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">\n' +
        '                <div className="flex items-center gap-3 mb-4">\n' +
        '                  <div className="w-8 h-8 bg-orange-100 text-[#FF7300] rounded-lg flex items-center justify-center">\n' +
        '                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
        '                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />\n' +
        '                    </svg>\n' +
        '                  </div>\n' +
        '                  <h3 className="text-xl font-bold text-stone-900">Key Benefits</h3>\n' +
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
