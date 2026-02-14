import { workExperiences } from "../data";
import { groupExperiencesByCompany } from "../utils/groupByCompany";

function WorkExperience() {
  const groupedExperiences = groupExperiencesByCompany(workExperiences);

  return (
    <section
      className="h-[85%] rounded-2xl flex flex-col overflow-auto work-experience p-5 bg-bgSecondary
    "
    >
      <span className="text-lg font-semibold text-textprimary">
        Work Experience
      </span>

      <div className="mt-6">
        {groupedExperiences.map((group) => (
          <div key={group.company} className="mb-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-textprimary font-medium text-sm">
                  {group.company}
                </h3>
                <div className="mb-4">
                  {group.roles.map((experience, idx) => (
                    <section
                      key={idx}
                      className="flex flex-col gap-1 pl-4 border-textSecondary border-opacity-20 py-2"
                    >
                      <span className="text-textprimary font-medium text-sm">
                        {experience.role}
                      </span>
                      <span className="text-textSecondary text-xs">
                        {experience.duration}
                      </span>
                      <ul className="ml-3 mt-2 list-disc list-inside text-textSecondary text-xs space-y-1">
                        {experience.description.map((point, descIdx) => (
                          <li key={descIdx}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
