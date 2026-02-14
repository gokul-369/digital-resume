import { skills } from "../data";

function Stack() {
  return (
    <section
      className="rounded-2xl p-5 flex gap-5 items-center justify-center bg-bgSecondary
    "
    >
      <span className="text-textprimary font-semibold">Stack</span>
      <section className="overflow-x-scroll stack">
        <div className="inline-flex gap-4 min-w-max whitespace-nowrap">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="p-3 flex items-center justify-center bg-neutral-800 rounded-xl text-sm"
            >
              <img
                src={skill.imagePath}
                alt={skill.name}
                className={`w-8 h-8 inline-block`}
              />
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Stack;
