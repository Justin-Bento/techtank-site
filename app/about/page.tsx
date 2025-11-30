import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="wrapper min-h-dvh py-24">
      <section className="flex items-center flex-col xl:flex-row-reverse gap-12">
        <span className="relative w-[50rem] aspect-[3/2] xl:aspect-[1/1.5]">
          <Image
            fill
            src="/techtank-about-us.webp"
            alt=""
            className="object-cover object-fit"
          />
        </span>
        <article className="max-w-[90ch] leading-7 [&>p:not(:first-child)]:mt-6 [&>p]:text-xl/8 text-balance">
          <h1 className="text-[3.50rem] pb-6">About Us</h1>
          <p>
            TechTank is a lively and inclusive tech community where we
            wholeheartedly embrace tech enthusiasts from all walks of life.
            Whether you're a seasoned coding expert, a budding tech
            entrepreneur, or simply someone with a passion for the digital
            world, you're welcome here. 🚀
          </p>
          <p>
            Whether you're a tech pro or just starting your journey, we've got
            you covered with coding workshops, study sessions, and tech
            discussions. Plus, we host a variety of fun and social events where
            you can make new friends. 🤓💻
          </p>
          <p>
            At TechTank, we celebrate our diverse tech community, showing that
            great things happen when different backgrounds come together! 💪🌍
          </p>
          <p>
            We're about the amazing people behind the tech. Join us in this
            journey of learning and innovation! 🚀💡
          </p>
          <p>Welcome to the Tank! Hope you have a great swim 🐟</p>
          <Link
            href="https://join.slack.com/t/thetechtank/shared_invite/zt-1ye3x0prk-VJm0VLmdA~hmhx1vRIueiA"
            target="_blank"
            className="mt-6 block w-fit bg-black text-white align-baseline py-3 text-sm capitalize px-4 rounded-lg"
          >
            Become a mentor today!
          </Link>
        </article>
      </section>
    </main>
  );
}
