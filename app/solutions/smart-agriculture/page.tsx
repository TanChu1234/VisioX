"use client";

import SolutionPageTemplate, { SolutionPageConfig } from "@/components/SolutionPageTemplate";
import {
    Leaf, Sprout, CloudSun, Droplets,
    TrendingUp, Target, Scan
} from "lucide-react";

const config: SolutionPageConfig = {
    accentColor: "green",
    accentHex: "#16A34A",
    bgTint: "bg-[#fafcf9]",
    gradientFrom: "from-green-600",
    gradientTo: "to-lime-400",

    badge: "Agriculture",
    badgeIcon: <CloudSun className="w-4 h-4" />,
    title: <>Precision AI for <br /><span className="text-green-600">Sustainable Yields</span></>,
    subtitle: "Bridging the gap between traditional farming and high-tech agriculture with visual intelligence that monitors every sprout and fruit.",
    heroImage: "/solutions/smart-agriculture.jpg",
    heroCTAPrimary: "Join the Green Revolution",
    heroCTASecondary: "Download Agri-Tech Report",

    stats: [
        { label: "Efficiency Boost", value: "+30%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Waste Reduction", value: "-40%", icon: <Droplets className="w-5 h-5" /> },
        { label: "Prediction Accuracy", value: "95%", icon: <Target className="w-5 h-5" /> },
        { label: "Yield Increase", value: "+15%", icon: <Sprout className="w-5 h-5" /> }
    ],

    capabilitiesTitle: "Digital Eyes in the Field",
    capabilitiesSubtitle: "Our computer vision platform is ruggedized for outdoor environments, operating across varying light conditions and weather patterns.",
    capabilities: [
        { title: "Crop Health Monitoring", description: "Multispectral analysis to detect early signs of stress, nutrient deficiency, or disease.", icon: <Leaf className="w-6 h-6 text-green-500" /> },
        { title: "Yield Prediction", description: "High-accuracy fruit counting and size estimation for precise harvest forecasting.", icon: <TrendingUp className="w-6 h-6 text-green-500" /> },
        { title: "Automated Harvesting", description: "Vision guidance for robotic harvesters to identify and pick ripe produce without damage.", icon: <Sprout className="w-6 h-6 text-green-500" /> },
        { title: "Precision Spraying", description: "Targeted application of fertilizers and pesticides only where needed, reducing waste.", icon: <Droplets className="w-6 h-6 text-green-500" /> }
    ],

    useCasesTitle: "Farm Success Stories",
    useCases: [
        { title: "Weed Detection Spraying", tag: "Roboflow Core", description: "Tractor-mounted cameras identifying weeds vs. crops in real-time to selectively apply herbicide, saving costs.", image: "/solutions/usecases/agri-drone.jpg", metric: "70% Chemical Saved" },
        { title: "Aerial Crop Health", tag: "Drone Mapping", description: "Using drone imagery to spot blight, pest damage, and irrigation leaks across hundreds of acres instantly.", image: "/solutions/usecases/apple-sorting.jpg", metric: "2x Yield Protection" },
        { title: "Automated Apple Sorting", tag: "SolVision", description: "High-speed conveyor systems evaluating the color, size, and bruising of apples for grocery grading.", image: "/solutions/usecases/greenhouse.jpg", metric: "12 tons/hr Flow" }
    ],

    ctaTitle: "Ready to grow smarter?",
    ctaSubtitle: "Our agriculture AI experts are ready to help you deploy visual intelligence across your fields or facility.",
    ctaPrimary: "Schedule a Site Visit",
    ctaSecondary: "Virtual Demo",
};

export default function AgriculturePage() {
    return <SolutionPageTemplate config={config} />;
}
