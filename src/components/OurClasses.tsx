import { SelectedPage, ClassType } from '@/shared/types';
import { classes } from '@/constants/data';
import { motion } from "framer-motion";
import { useRef } from 'react';
import OurClassesChild from './OurClassesChild';
import HText from '@/shared/HText';


type Props = {
  setSelectedPage: (setSelectedPage: SelectedPage) => void;
}


const OurClasses = ({ setSelectedPage }: Props) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const { current } = containerRef;


  const handleWheel: (e: WheelEvent) => void = (e: WheelEvent) => {
    // Cancel the default behavior of the event
    e.preventDefault();
    // Get the current scroll position
    const { current } = containerRef;
    const { scrollLeft } = current!;
    // Update the scroll position
    current!.scrollLeft = scrollLeft + e.deltaY;
  };

  const handleMouseEnter: React.MouseEventHandler = () => current!.addEventListener('wheel', handleWheel);
  const handleMouseLeave: React.MouseEventHandler = () => current!.removeEventListener('wheel', handleWheel);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleWheel, { passive: false });
  //   return () => window.removeEventListener('scroll', handleWheel);
  // }, [])


  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>

        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mt-10 h-[353px] w-full overflow-x-scroll overflow-y-hidden customScroll"
        >
          <ul className="w-[2800px] whitespace-nowrap">
            {
              classes.map((item: ClassType, index) => (
                <OurClassesChild
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))
            }
          </ul>
        </div>

      </motion.div>
    </section>
  );
};

export default OurClasses