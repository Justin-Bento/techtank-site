import { EXTERNAL_LINKS } from "@/utils/constants/navigation";
import { PEOPLE } from "@/utils/constants/people";
import Link from "next/link";

const MENTORS = PEOPLE.filter((person) => !!person.mentorship);

export default function MentorsPage() {
  return (
    <main className="wrapper min-h-dvh py-24">
      <section className="*:scroll-m-20">
        <h1 className="text-[3.50rem]">Meet Our Mentors</h1>
        <p className="mt-3 text-xl/8 text-pretty max-w-[80ch]">
          Unlock the joy of mentoring in tech! Join us to inspire and guide
          aspiring minds in the dynamic world of technology. Make a difference,
          share your expertise, and shape the future of tech.
        </p>
        <Link
          href={EXTERNAL_LINKS.BE_A_MENTOR}
          className="mt-6 block w-fit bg-black text-white align-baseline py-3 text-sm capitalize px-4 rounded-lg"
        >
          Become a mentor today!
        </Link>
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {MENTORS.map((mentor) => (
          <div
            key={mentor.name}
            className="bg-white/60 border-2 border-gray-200 rounded-lg py-6 px-4 flex flex-col items-center"
          >
            <img
              src={mentor.imageUrl}
              loading="lazy"
              className="size-18 object-cover rounded-full mb-4"
            />
            <h2 className="text-md font-bold">{mentor.name}</h2>
            <p className="text-sm mb-3">{mentor.role}</p>
            <p className="text-base text-center">
              {mentor.mentorship.expertise.join(", ")}
            </p>
            <Link href={mentor.mentorship.connectUrl} target="_blank">
              <div className="mt-3 text-sm after:content-['_↗'] underline">
                Mentor Connect
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
