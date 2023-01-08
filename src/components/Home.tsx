import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import images from "@/assets";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { commonAnimations } from "@/constants/data";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const Home = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">

      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        // highlighting where we are in navigation...
        // when we enter this view port this function is execute...
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            {...commonAnimations}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolveText">
                <img alt="home-page-text" src={images.HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            {...commonAnimations}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>

            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>

          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={images.HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {
        isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redBull-sponsor" src={images.SponsorRedBull} />
                <img alt="forbes-sponsor" src={images.SponsorForbes} />
                <img alt="fortune-sponsor" src={images.SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
    </section>
  );
};

export default Home;