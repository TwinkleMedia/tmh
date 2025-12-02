import { useEffect, useRef, useState } from 'react'
import './seo.css'
import { FileSearch, Lightbulb, PieChart, Target, UserCheck } from 'lucide-react';
export default function Seotime() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const desktopTimeLineRef = useRef(null);
    const mobileTimeLineRef = useRef(null);
    const services = [
        {
            id: 1,
            icon: Lightbulb,
            title: "Consultation and Analysis",
            desc: "Understanding your business goals, target audience, and current SEO status.",
            position: "left"
        },
        {
            id: 2,
            icon: FileSearch,
            title: "Strategy Development",
            desc: "Crafting a tailored SEO strategy focusing on on-page, off-page, and local SEO optimizations",
            position: "right"
        },
        {
            id: 3,
            icon: PieChart,
            title: "Implementation",
            desc: "Executing SEO tactics including keyword optimization, content creation, and technical SEO enhancements.",
            position: "left"
        },
        {
            id: 4,
            icon: Target,
            title: "Monitoring and Reporting",
            desc: "Continuous monitoring of performance metrics with transparent reporting and insights.",
            position: "right"
        },
        {
            id: 5,
            icon: UserCheck,
            title: "Optimization and Adaptation",
            desc: "Regular refinement of strategies based on performance data to maximize results.",
            position: "left"
        },
    ]
    useEffect(() => {
        const handleScroll = () => {
            const timelineElement = window.innerWidth >= 768 ? desktopTimeLineRef.current : mobileTimeLineRef.current;
            if (!timelineElement) return;

            const rect = timelineElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const timelineHeight = timelineElement.offsetHeight;

            // Timeline hasn't entered viewport yet
            if (rect.top >= windowHeight) {
                setScrollProgress(0);
                return;
            }

            // Timeline has completely scrolled past
            if (rect.bottom <= 0) {
                setScrollProgress(100);
                return;
            }

            // Calculate progress based on the middle of the viewport
            // Start filling when timeline enters, fill gradually as we scroll
            const viewportMiddle = windowHeight / 2;
            const timelineTop = rect.top;
            const timelineBottom = rect.bottom;

            // Calculate how much of timeline has passed the middle of viewport
            if (timelineTop <= viewportMiddle) {
                const distanceScrolled = viewportMiddle - timelineTop;
                const progress = (distanceScrolled / timelineHeight) * 100;
                setScrollProgress(Math.max(0, Math.min(100, progress)));
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    return (
        <div className="timeline-container">
            <div className="timeline-wrapper">
                {/* desktopTimline */}
                <div className="desktop-timeline" ref={desktopTimeLineRef}>
                    <div className="timeline-line-bg"></div>
                    <div className="timeline-line-progress" style={{ height: `${scrollProgress}%` }}></div>
                    {services.map((service) => (
                        <div key={service.id} className={`timeline-item timeline-item-desktop ${service.position}`}>
                            <div className="timeline-content">
                                <div className="content-card">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                            <div className="icon-circle"><service.icon /></div>
                            <div className="timeline-spacer"></div>
                        </div>))}
                </div>
                {/* Mobile Timeline */}
                <div className="mobile-timeline" ref={mobileTimeLineRef}>
                    <div className="timeline-line-bg"></div>
                    <div className="timeline-line-progress" style={{ height: `${scrollProgress}%` }}></div>
                    {services.map((service) => (
                        <div key={service.id} className="timeline-item timeline-item-mobile">
                            <div className="icon-circle">
                                <service.icon />
                            </div>
                            <div className="content-card">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}