"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Brain, Building, FileText, Monitor, Rocket, Search, Settings, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="plain"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Enterprise", id: "enterprise" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462195356-7ca1szag.jpg"
          logoAlt="StaffToday.AI"
          brandName="StaffToday.AI"
          button={{
            text: "Book Demo",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="The Only 360 AI Recruitment Agency"
          description="No ATS. No integrations. StaffToday isn't automation, it's placements. Hand our AI recruiters a job description; they'll source, contact, & phone-screen candidates. Just like a human recruiter."
          tag="Specializing in AU Construction"
          tagIcon={Settings}
          buttons={[
            { text: "Claim Your Free Search", href: "contact" },
            { text: "Login to Dashboard", href: "https://dashboard.stafftoday.ai" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462197114-krrq0h8t.jpg"
          imageAlt="StaffToday AI recruitment dashboard"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="Save 75% of your time, reduce costs by 60%, and achieve 95% accuracy in candidate matching — all while eliminating the hassle of traditional recruitment"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="AI-Powered Recruitment Features"
          description="Advanced technology that delivers results you can trust"
          tag="GPT-4 Powered"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            { title: "AI Role Parsing", icon: FileText },
            { title: "Multi-Platform Sourcing", icon: Search },
            { title: "ML Analysis", icon: Brain },
            { title: "Real-Time Tracking", icon: Monitor }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="StaffToday.AI Specializes In"
          description="Build, Property Development, and more — we deliver the right talent for your projects"
          tag="Expertise Areas"
          tagIcon={Building}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "executive-leadership",
              name: "Executive & Leadership",
              price: "Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462199760-ksh0cp52.jpg",
              imageAlt: "Executive leadership roles"
            },
            {
              id: "site-delivery",
              name: "Site & Delivery",
              price: "Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462201108-3tk12ddy.png",
              imageAlt: "Site delivery roles"
            },
            {
              id: "engineering",
              name: "Engineering",
              price: "Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462202351-2k0tflfe.jpg",
              imageAlt: "Engineering roles"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Trusted by construction professionals across Australia"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Project Director",
              testimonial: "StaffToday.AI transformed our hiring process. We found the perfect Senior PM within 3 days with 92% match accuracy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462203914-mhw7d3jp.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Construction Manager",
              testimonial: "The AI-powered screening saved us countless hours. Every candidate was pre-qualified and ready to interview.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462205215-9ci8fymi.jpg",
              imageAlt: "James Rodriguez"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Site Engineer Lead",
              testimonial: "Real-time dashboard gives us complete visibility into our recruitment pipeline. No more spreadsheets or guesswork.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462206450-a75x7lqh.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Commercial Director",
              testimonial: "95% accuracy in candidate matching means we only interview the best fits. It's revolutionized how we hire.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462207772-7pxfi41i.jpg",
              imageAlt: "Michael Chen"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our AI recruitment process"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you post job ads or wait for candidates to apply?",
              content: "No. We use AI to proactively search and directly engage top-matching candidates. No job boards. No waiting. No third-party recruiters."
            },
            {
              id: "2",
              title: "How fast can I expect candidates?",
              content: "Initial outreach starts within 24–48 hours. You'll receive a shortlist of verified, engaged candidates in 3–5 business days, depending on the role."
            },
            {
              id: "3",
              title: "Can I hire for future projects or stage-based timelines?",
              content: "Yes. You can upload roles with future start dates. We'll source candidates and maintain engagement until your project timeline aligns."
            },
            {
              id: "4",
              title: "What makes your AI different from other recruitment tools?",
              content: "Our AI doesn't just automate processes - it actually makes placements. It sources, contacts, and phone-screens candidates just like a human recruiter would."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Let AI Handle the Hiring"
          description="You build the future — we'll find the people. Get started with a free search and see the difference AI recruitment makes."
          tagIcon={Rocket}
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Search"
          termsText="By clicking Start Free Search you're confirming that you agree with our Terms and Conditions."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763462209694-iy8wnkgd.jpg"
          imageAlt="AI recruitment consultation"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="StaffToday.AI"
          copyrightText="© 2025 StaffToday.AI. All rights reserved."
          columns={[
            {
              title: "Support",
              items: [
                { label: "Contact Support", href: "mailto:support@stafftoday.ai" },
                { label: "Book Demo", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "https://stafftoday.ai/terms" },
                { label: "Privacy Policy", href: "https://stafftoday.ai/privacy" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Enterprise", href: "enterprise" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}