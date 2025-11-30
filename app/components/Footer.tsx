import Link from "next/link";
import Image from "next/image";
import navigation from "../../utils/constants/navigation";

export default function Footer() {
  return (
    <footer aria-labelledby="footer" className="bg-gray-900 py-16 ">
      <section className="wrapper grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="flex items-center md:items-start mb-12 flex-col">
            <span className="block">
              <Image
                src="/full_logo_2x.png"
                width={90}
                height={90}
                alt="tech tank full logo"
                className="w-auto h-auto"
              />
            </span>
            <div className="inline-flex gap-8">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-less-white hover:text-light-turquoise"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-8 mt-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex items-start justify-evenly">
            <div>
              <h3 className="text-white font-bold">Our Events</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.events.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-light-turquoise underline hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold">Our Events</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.events.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-light-turquoise underline hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold">Terms & Conditions</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-light-turquoise underline hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
