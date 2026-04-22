import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero-section'
import { IntroSection } from '@/components/sections/intro-section'
import { FeaturedWorkSection } from '@/components/sections/featured-work-section'
import { WebWorksSection } from '@/components/sections/web-works-section'
import { LpWorksSection } from '@/components/sections/lp-works-section'
import { BannerWorksSection } from '@/components/sections/banner-works-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Header />
      <main className="grain relative">
        <HeroSection />
        <IntroSection />
        <FeaturedWorkSection />
        <WebWorksSection />
        <LpWorksSection />
        <BannerWorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
