import { useEffect } from "react";
import Cta from "../components/landing/cta";
import FeaturesBlocks from "../components/landing/features-blocks";
import FeaturesHome from "../components/landing/features-home";
import HeroHome from "../components/landing/hero-home";
import TestimonialsHome from "../components/landing/testimoninals-home";
import Layout from "../components/misc/layout";

export default function Home() {
  return (
    <Layout>
      <HeroHome />
      {/* <FeaturesHome /> */}
      {/* <FeaturesBlocks /> */}
      {/* <TestimonialsHome /> */}
      <Cta />
    </Layout>
    
  )
}