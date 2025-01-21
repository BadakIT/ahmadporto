import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Network Engineer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          my name is ahmad triwibowo, I currently attending SMK N 2 Yogyakarta as a 12th grade student majoring
          in network information and applications (SIJA), which focuses on
          building, managing, and securing computer networks, as well as
          developing software applications. I have experience in building and
          managing networks such as subnetting, FO splacing, RJ45 crimping,
          installing ODP.
        </p>
      </div>
    </div>
  );
}
