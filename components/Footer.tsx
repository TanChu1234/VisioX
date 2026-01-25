export default function Footer() {
    return (
        <footer className="bg-[#f5f2ed] border-t border-stone-200 pt-16 pb-8 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <span className="text-stone-900 font-bold text-xl">VisionX</span>
                        </div>
                        <p className="text-stone-600 max-w-sm mb-6">
                            The leading intelligent computer vision platform for high-quality data annotation and visual analysis.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-stone-900 font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Features</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Solutions</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-stone-900 font-bold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Community</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Blog</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-stone-900 font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">About Us</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Careers</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Contact</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-[#FF7300] transition-colors">Legal</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-stone-500">
                    <p>© 2026 VisionX. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-stone-900 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
