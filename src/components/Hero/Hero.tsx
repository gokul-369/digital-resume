import { useEffect, useState } from "react";
import type { ThemeClassSet } from "../../types";
import LiquidEther from "../Background/LiquidEther";
import Nav from "../Nav";
import { hero } from "../../data";
import Fade from "../../animations/Fade";
import Button from "../Button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type HeroProps = {
  theme: ThemeClassSet;
  colors: string[];
};

function Hero({ theme, colors }: HeroProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // Let the browser paint once, then animate
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section id={"home"} className={`h-dvh relative w-full ${theme.bgPrimary}`}>
      <div className="relative top-0 h-[300%] -z-0">
        <LiquidEther
          colors={colors}
          isViscous
          iterationsViscous={50}
          resolution={0.25}
          autoResumeDelay={1500}
          autoRampDuration={0.3}
          isBounce
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Fade
          className="fixed top-7 z-40"
          start={ready}
          variant="fade-down"
          delay={100}
        >
          <Nav theme={theme} />
        </Fade>

        {/* main hero content */}
        <main className="content flex flex-col gap-6 px-44">
          <Fade start={ready} variant="fade-down">
            <div
              className={`text-lg tracking-widest uppercase font-thin text-center ${theme.textPrimary}`}
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
          </Fade>
          <Fade
            start={ready}
            variant="fade-up"
            delay={300}
            className={"mt-3 text-center"}
          >
            <h3
              className={`${theme.headerGradient} bg-clip-text text-5xl md:text-6xl font-bold text-transparent`}
            >
              {hero.punchLine}
            </h3>

            <h4 className={`mt-4 text-lg ${theme.textSecondary}`}>
              {hero.shortDescription}
            </h4>
          </Fade>
          <Fade
            start={ready}
            variant="fade-up"
            delay={500}
            mt-5
            text-center
            className={"text-center"}
          >
            <div
              className={`${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: hero.longDescription }}
            />
            <div className="inline-flex gap-5 items-center justify-center mt-10">
              <Button text="Know more" variant="primary" />
              <Button text="Get in touch" variant="tertiary" />
            </div>
          </Fade>
        </main>

        <ChevronDownIcon
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce ${theme.textPrimary}`}
        />
      </div>
    </section>
  );
}

export default Hero;
