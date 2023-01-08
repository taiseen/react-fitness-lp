import { commonAnimations, contactFormData } from "@/constants/data";
import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import images from "@/assets";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const ContactUs = ({ setSelectedPage }: Props) => {

  const encryptedEmailAddress = '30cc3c9cf1c5d5320aa7d4e9c63d5c4d';
  const emailLink = `https://formsubmit.co/${encryptedEmailAddress}`;
  const inputStyles = `mb-6 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async (e: any) => {
  
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          {...commonAnimations}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">

          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            {...commonAnimations}
          >
            <form
              onSubmit={onSubmit}
              action={emailLink}
              method="POST"
            >
              {
                contactFormData.map(formData => (
                  <div className="relative" key={formData.id}>
                    {
                      formData.element === 'input' ? (
                        <>
                          <input
                            className={inputStyles}
                            type={formData.type}
                            placeholder={formData.placeholder}
                            {...register(formData.id, {
                              required: formData.required,
                              maxLength: formData.maxLength,
                              pattern: formData.pattern,
                            })}
                          />
                          {errors[formData.id] && (
                            <p className={`text-primary-500 absolute -top-6 right-0`}>
                              {errors?.[formData.id]?.type === "required" && formData.error.requiredInfo}
                              {
                                formData.type === 'email'
                                  ? errors?.[formData.id]?.type === "pattern" && formData.error.patternInfo
                                  : errors?.[formData.id]?.type === "maxLength" && formData.error.maxLengthInfo
                              }
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          <textarea
                            className={inputStyles}
                            placeholder={formData.placeholder}
                            rows={4}
                            cols={50}
                            {...register(formData.id, {
                              required: formData.required,
                              maxLength: formData.maxLength,
                            })}
                          />
                          {errors[formData.id] && (
                            <p className={`text-primary-500 absolute -top-6 right-0`}>
                              {errors?.[formData.id]?.type === "required" && formData.error.requiredInfo}
                              {errors?.[formData.id]?.type === "maxLength" && formData.error.maxLengthInfo}
                            </p>
                          )}
                        </>
                      )
                    }
                  </div>
                ))
              }

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            {...commonAnimations}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolveText">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={images.ContactUsPageGraphic}
              />
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default ContactUs;
