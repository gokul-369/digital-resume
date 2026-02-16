import BlurText from "../../animations/Text/BlurText";
import type { ThemeClassSet } from "../../types";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfilePicture from "../../assets/profile.png";
import { bio } from "../../data";
import TextType from "../../animations/Text/TypeWriter";
import { useState } from "react";

function About({ theme }: { theme: ThemeClassSet }) {
  const [startTyping, setStartTyping] = useState(false);
  return (
    <section id="about" className={`h-screen py-32 ${theme.bgPrimary}`}>
      <main className="relative flex flex-col items-center justify-start">
        <p className={`${theme.textPrimary} uppercase tracking-widest`}>
          {" "}
          It’s time to get to{" "}
          <span className={`text-indigo-500`}>know me </span>
        </p>
        <div
          className={`grid grid-cols-2 h-full gap-8 justify-center items-center mt-10`}
        >
          <ProfileCard
            className="h-full mx-auto text-center w-[350px]"
            name="Gokul"
            title="Software Engineer"
            handle="gokul369"
            status="Online"
            contactText="Contact Me"
            avatarUrl={ProfilePicture}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="hsla(173, 100%, 70%, 0.6)"
            behindGlowEnabled
            // innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(193, 60%, 70%, 0.27) 100%)"
            // innerGradient="linear-gradient(145deg,hsla(230, 40%, 45%, 0.55) 0%,hsla(228, 60%, 70%, 0.27) 100%)"
            innerGradient="linear-gradient(145deg, rgba(56,189,248,0.15) 0%, rgba(99,102,241,0.22) 40%, rgba(251,191,36,0.18) 100%)"
          />

          <div className={`${theme.textPrimary} max-w-lg text-lg`}>
            <BlurText
              delay={200}
              // text="Hi I am Gokul"
              animateBy="tags"
              direction="top"
              onAnimationComplete={() => setStartTyping(true)}
              className={`text-4xl font-medium mb-8 ${theme.textPrimary}  tracking-wide`}
            >
              <h1
                className={`text-4xl md:text-5xl font-bold ${theme.textPrimary}`}
              >
                {"Hi, I am "}
              </h1>
              <h1 className="text-4xl ml-3 md:text-5xl font-bold text-indigo-500">
                Gokul
              </h1>
            </BlurText>
            <div className="h-8 mb-8 flex items-center">
              {startTyping && (
                <h1
                  className={`${theme.textPrimary} text-2xl font-thin tracking-widest`}
                >
                  I am also{" "}
                  <TextType
                    text={[
                      "An Engineer",
                      "A Photographer",
                      "An F1 enthusiast",
                      "A Gym rat",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    textColors={[
                      "oklch(62.3% 0.214 259.815)",
                      "oklch(58.5% 0.233 277.117)",
                      "oklch(76.9% 0.188 70.08)",
                    ]}
                    cursorBlinkDuration={0.5}
                  />
                </h1>
              )}
            </div>
            {bio.description}
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
