import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import { FORM_STATES } from 'constants/forms';

import ContactForm from './contact-form';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.3;

const appearAndExitAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION } },
  exit: { opacity: 0, transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION } },
};

const NoiseFilter = () => (
  <svg className="absolute" aria-hidden="true">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="6.29" numOctaves="6" stitchTiles="stitch" />
    </filter>
  </svg>
);

const Hero = () => {
  const [formState, setFormState] = useState(FORM_STATES.DEFAULT);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative grow overflow-hidden bg-black pt-44 pb-40 text-white 2xl:pt-[136px] 2xl:pb-36 lg:pt-9 lg:pb-28 md:pb-24">
        <AnimatePresence mode="wait">
          {formState === FORM_STATES.SUCCESS ? (
            <m.div
              className={clsx(
                'mb-28 flex w-full flex-col items-center text-center lg:px-8 md:px-4'
              )}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={appearAndExitAnimationVariants}
              aria-hidden={formState !== FORM_STATES.SUCCESS}
            >
              <StaticImage
                className="sm:w-1/2"
                src="./images/illustration-success.png"
                width={330}
                height={372}
                loading="lazy"
                alt=""
                aria-hidden
              />
              <Heading size="md" tag="h2">
                Your message has been sent
              </Heading>
              <p className="mt-5 text-xl md:text-lg">
                Thank you for contacting us. We will be in touch shortly.
              </p>
              <Button
                className="relative mt-9 px-9 py-6 !text-lg xl:!text-base"
                theme="primary"
                size="sm"
                to="/"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-[232px] w-full rounded-[32px] opacity-40 blur-[30px] lg:h-[146px] sm:h-[92px]"
                  style={{
                    background: 'linear-gradient(180deg, #00E599 0%, rgba(0, 229, 153, 0) 100%)',
                  }}
                />
                <span className="relative z-10">Back to Home</span>
              </Button>
            </m.div>
          ) : (
            <m.div
              className="mx-auto max-w-[1216px] text-center lg:max-w-none lg:px-8 md:px-4"
              animate={{
                opacity: formState === FORM_STATES.SUCCESS ? 0 : 1,
                pointerEvents: formState === FORM_STATES.SUCCESS ? 'none' : 'auto',
                transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION },
              }}
            >
              <h1 className="text-[72px] font-bold leading-tight 2xl:text-[56px] 2xl:leading-dense md:text-[36px]">
                Talk to our Sales team
              </h1>
              <p className="mx-auto mt-1.5 max-w-[787px] text-xl 2xl:max-w-[616px] 2xl:text-base md:mt-2">
                Interested in increasing your free tier limits or learning about pricing? Complete
                the form below to get in touch with our Sales team.
              </p>
              <div className="mx-auto mt-16 flex after:pointer-events-none after:absolute after:inset-y-0 after:left-1/2 after:h-full after:w-screen after:-translate-x-1/2 after:opacity-10 after:[filter:url('#noiseFilter')] after:[-webkit-mask-image:radial-gradient(circle,transparent_0%,black_300%)] 2xl:mt-12 2xl:max-w-5xl lg:mt-9 lg:max-w-[583px] lg:flex-col lg:space-y-9 md:mt-6 md:space-y-6">
                <div
                  className={clsx(
                    'relative w-full max-w-[696px] shrink-0  2xl:max-w-[535px] lg:max-w-none',
                    'before:absolute before:inset-0 before:h-full before:w-full before:rounded-[20px] before:bg-primary-1 before:opacity-60 before:shadow-[0_0_100px_30px_rgb(0_230_153/50%)] sm:before:shadow-[0_0_30px_10px_rgb(0_230_153/50%)]'
                  )}
                >
                  <ContactForm formState={formState} setFormState={setFormState} />
                </div>
                <div
                  className={clsx(
                    'relative my-9 flex-1 font-mono text-black lg:my-0',
                    'before:absolute before:inset-0 before:h-full before:w-full before:rounded-[20px] before:bg-secondary-2 before:opacity-70 before:shadow-[0_0_100px_30px_rgb(240_240_117/40%)] sm:before:shadow-[0_0_30px_10px_rgb(240_240_117/40%)]'
                  )}
                >
                  <div className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-r-[20px] bg-secondary-2 pt-10 lg:flex-row lg:rounded-[20px] lg:pt-0 md:flex-col md:items-center">
                    <div className="px-11 lg:order-1 lg:self-center lg:pl-[18px] lg:pr-8 lg:text-left md:order-none md:px-8 md:pr-4 md:pl-4 md:pt-5 md:text-center">
                      <h2
                        className="text-[56px] font-bold leading-none 2xl:text-5xl lg:text-[36px]"
                        style={{
                          background:
                            'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.8) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          textFillColor: 'transparent',
                        }}
                      >
                        On Demand!
                      </h2>
                      <p className="mt-2.5 text-[23px] font-bold leading-snug text-[#3E3E29] 2xl:text-xl lg:max-w-[208px] md:max-w-none">
                        Only pay for what you use.
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-[620px] -translate-x-1/2 2xl:w-[554px] lg:static lg:-mb-3 lg:-ml-2.5 lg:w-[320px] lg:translate-x-0 lg:pt-2.5 md:-mb-4 md:ml-0 md:mt-4 md:w-[334px] md:pt-0">
                      <StaticImage
                        src="./images/illustration-pricing.png"
                        alt="Illustration"
                        objectFit="cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <NoiseFilter />
      </section>
    </LazyMotion>
  );
};

export default Hero;
