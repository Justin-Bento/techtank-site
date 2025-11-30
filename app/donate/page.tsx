import { INTERNAL_LINKS } from "@/utils/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="wrapper min-h-dvh lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <div className="relative w-full aspect-[3/2] lg:col-span-1">
        <Image
          fill
          src="https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/1697678889303-6RU68FOVIKUJQRAAHQY9/20230812_204737.jpg"
          alt="people stting aorund the campfire"
          className="rounded-xl"
        />
      </div>
      <div className="[&>p:not(:first-child)]:mt-6 [&>p]:text-xl/8 lg:col-span-1">
        <h1 className="scroll-m-20 text-4xl text-balance leading-13 capitalize">
          TechTank is a 100% <br /> volunteer-run community.
        </h1>
        <p>
          If you’ve gotten value from our events or community, we’d really
          appreciate your support in paying it forward to help us keep this
          going!
        </p>
        <p>
          Any amount you donate goes entirely to paying for event operations and
          common community infrastructure for our members.
        </p>
      </div>
      <section className="lg:col-span-3 bg-gray-900 rounded-xl flex flex-col justify-center gap-4 h-64">
        <div className="self-center flex flex-col sm:flex-row items-center gap-4">
          <span className="relative size-16 sm:size-24">
            <Image
              fill
              src="/interact_logo.svg"
              alt="Interac e-transfer"
              className=""
            />
          </span>
          <div className="*:text-white flex flex-col items-center sm:items-start">
            <Link
              href="mailto:techtankto@gmail.com"
              className="text-2xl font-medium"
            >
              techtankto@gmail.com
            </Link>
            <p className="text-base italic text-gray-400 max-w-[50ch] text-center sm:text-left">
              By donating to TechTank, you agree that your donation is bound by
              the{" "}
              <Link
                href={INTERNAL_LINKS.TERMS_CONDITIONS}
                target="_blank"
                className="underline"
              >
                Donation Terms & Conditions.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
