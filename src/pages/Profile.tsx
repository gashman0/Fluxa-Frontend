import { useMe } from "../network/me/queries";

const Profile = () => {
  const {data} = useMe();
  const user = {
    name: "Gustavo Victor",
    title: "Frontend Developer",
    location: "Lagos, Nigeria",
    email: "gustavo@example.com",
    bio: "Passionate frontend developer focused on building beautiful and scalable web applications with React and TypeScript.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
    ],
  };

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8">
      {/* Profile Header */}
      <div
        className="
          rounded-3xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          overflow-hidden
        "
      >
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-[#642409] to-[#6B0B0C]" />

        <div className="px-6 pb-6">
          {/* Avatar */}
          <div
            className="
              -mt-12
              flex h-24 w-24
              items-center justify-center
              rounded-full
              border-4 border-[#2D120D]
              bg-[#642409]
              text-3xl font-bold
              text-[#FFF8CA]
            "
          >
            G
          </div>

          <h1 className="mt-4 text-3xl font-bold text-[#FFF8CA]">
           {data?.name}
          </h1>

          <p className="mt-1 text-[#FFF8CA]/70">
            {user.title}
          </p>

          <p className="mt-2 text-sm text-[#FFF8CA]/50">
            {user.location}
          </p>

          <p className="mt-1 text-sm text-[#FFF8CA]/50">
            {data?.email} 
          </p>
        </div>
      </div>

      {/* About */}
      <section
        className="
          mt-6
          rounded-2xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          p-6
        "
      >
        <h2 className="text-xl font-semibold text-[#FFF8CA]">
          About
        </h2>

        <p className="mt-4 text-[#FFF8CA]/70 leading-relaxed">
          {user.bio}
        </p>
      </section>

      {/* Skills */}
      <section
        className="
          mt-6
          rounded-2xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          p-6
        "
      >
        <h2 className="text-xl font-semibold text-[#FFF8CA]">
          Skills
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                bg-[#642409]
                px-4 py-2
                text-sm
                text-[#FFF8CA]
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        className="
          mt-6
          rounded-2xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          p-6
        "
      >
        <h2 className="text-xl font-semibold text-[#FFF8CA]">
          Experience
        </h2>

        <div className="mt-4">
          <h3 className="font-semibold text-[#FFF8CA]">
            Frontend Developer
          </h3>

          <p className="mt-1 text-[#FFF8CA]/70">
            Freelance
          </p>

          <p className="mt-1 text-sm text-[#FFF8CA]/50">
            2023 - Present
          </p>
        </div>
      </section>

      {/* Education */}
      <section
        className="
          mt-6
          rounded-2xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          p-6
        "
      >
        <h2 className="text-xl font-semibold text-[#FFF8CA]">
          Education
        </h2>

        <div className="mt-4">
          <h3 className="font-semibold text-[#FFF8CA]">
            Bachelor Degree
          </h3>

          <p className="mt-1 text-[#FFF8CA]/70">
            Computer Science
          </p>

          <p className="mt-1 text-sm text-[#FFF8CA]/50">
            2018 - 2022
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;