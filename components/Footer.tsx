export default function Footer() {
    return (
        <footer className="bg-[#f5f2ed] border-t border-stone-200 pt-12 pb-8 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                                <span className="text-white font-black text-2xl italic">V</span>
                            </div>
                            <span className="text-stone-900 font-bold text-2xl tracking-tight">VisioX</span>
                        </div>
                        <p className="text-stone-600 max-w-sm mb-4 text-sm font-medium leading-relaxed">
                            The leading intelligent computer vision platform for high-quality data annotation and visual analysis. Built for engineers, by engineers.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-stone-900 font-bold mb-4 text-xs uppercase tracking-widest">Product</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Features</a></li>
                            <li><a href="/solutions" className="text-stone-500 hover:text-orange-500 transition-colors">Solutions</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-stone-900 font-bold mb-4 text-xs uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Community</a></li>
                            <li><a href="/about/blog" className="text-stone-500 hover:text-orange-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-stone-900 font-bold mb-4 text-xs uppercase tracking-widest">Company</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><a href="/about/company" className="text-stone-500 hover:text-orange-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Careers</a></li>
                            <li><a href="/about/contact" className="text-stone-500 hover:text-orange-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-orange-500 transition-colors">Legal</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-bold uppercase tracking-widest text-stone-400">
                    <p>© 2026 VisioX. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-stone-900 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
