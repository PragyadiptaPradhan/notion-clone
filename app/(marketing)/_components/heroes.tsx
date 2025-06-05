import Image from "next/image";

export const Heroes = () => {
    return (
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
      {/* //max-w-3xl mx-auto space-y-4 flex flex-col items-center text-center */}
        <div className="flex item-center">
          <div
            className="relative w-[300px] h-[300px] sm:w-[350px] 
                sm:h-[350px] md:h-[400px] md:w-[400px]"
          >
            <Image
              src="/idea.svg"
              fill
              className="object-contain dark:hidden"
              alt="Idea"
            />
            <Image
              src="/idea-dark.svg"
              fill
              className="hidden object-contain dark:block"
              alt="Idea"
            />
          </div>
          <div className="relative  h-[400px] w-[400px] hidden md:block">
            <Image
              src="/team.svg"
              fill
              className="object-contain dark:hidden"
              alt="Team"
            />
            <Image
              src="/team-dark.svg"
              fill
              className="hidden object-contain dark:block"
              alt="Team"
            />
          </div>
        </div>
      </div>
    );
}