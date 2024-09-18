import { EXPERIENCES, IEXPERIENCE } from "@/app/lib/constants/experiences";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";

const ListingExperiences = () => {
  return (
    <>
      {EXPERIENCES.length
        ? EXPERIENCES.map((experience, experienceIndex) => (
            <div
              key={`exp-${experienceIndex}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-10"
            >
              <div className="md:col-span-2 xl:text-right">
                <p
                  className="h1 md:h2 uppercase sticky top-32"
                  data-aos="fade-right"
                >
                  <HackedText text={experience.year} />
                </p>
              </div>
              <div className="md:col-span-7 text-gray-400">
                {experience.experiences.length
                  ? experience.experiences.map(
                      (exp: IEXPERIENCE, expIndex: number) => (
                        <div key={`year-exp-${expIndex}`} className="pb-8">
                          <div className="grid grid-cols-12 pb-8">
                            <div className="col-span-12 xl:col-span-9">
                              <h4 className="font-bold text-white leading-loose flex flex-row items-center flex-wrap gap-x-2 gap-y-0">
                                <span
                                  className="uppercase"
                                  data-aos="fade-left"
                                >
                                  <HackedText text={exp.role} />
                                </span>
                                {exp.workType ? (
                                  <span
                                    className="text-base text-gray-400 font-light"
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                  >
                                    &mdash; {exp.workType}
                                  </span>
                                ) : null}
                              </h4>
                              <p
                                className="h5 font-light"
                                data-aos="fade-left"
                                data-aos-delay="100"
                              >
                                {exp.title}
                              </p>
                            </div>
                            <div className="col-span-12 xl:col-span-3 pt-3">
                              <p
                                className="xl:text-right text-gray-500 text-sm"
                                data-aos="fade-left"
                                data-aos-delay="100"
                              >
                                {exp.date}
                              </p>
                              {exp.duration ? (
                                <p
                                  className="xl:text-right text-gray-500 text-sm"
                                  data-aos="fade-left"
                                  data-aos-delay="100"
                                >
                                  {exp.duration}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          {exp.description.length ? (
                            <ul className="list-disc list-outside pl-4 leading-7">
                              {exp.description.map((desc, descIndex) => (
                                <li
                                  key={`exp-desc-${expIndex}-${descIndex}`}
                                  className="pb-6"
                                  data-aos="fade-left"
                                  data-aos-delay={descIndex * 100 + 100}
                                >
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      )
                    )
                  : null}
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ListingExperiences;
