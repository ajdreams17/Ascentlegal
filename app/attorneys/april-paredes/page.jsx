import Image from "next/image";

export default function AprilParedesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-6">
        <Link
           <Link href="/about" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
        ← Back to About
      </Link>
      </div>
      <h1 className="text-4xl font-bold">April Paredes</h1>
      <p className="mt-2 text-gray-600">Attorney – Corporate & Entertainment Law</p>

      {/* Headshot */}
      <div className="mt-6">
        <Image
          src="/attorneys/april_paredes.jpg"
          alt="April Paredes headshot"
          width={200}
          height={200}
          className="rounded-full shadow-md object-cover"
        />
      </div>

      {/* Bio */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        As a business and entertainment attorney, April gained valuable experience at Sheppard Mullin Richter & Hampton LLP, where she focused on providing legal counsel in the entertainment, media, and technology sectors. In her role, she handled transactional matters related to the creation, production, and distribution of audiovisual content, including television, feature films, and podcasts. April advised clients on rights acquisition, licensing, and brand collaborations, working with producers, studios, media companies, and major brands entering the content creation space.

In addition to her entertainment law experience, April has worked closely with startups, providing high-touch legal services throughout their lifecycle—from formation to exit—helping them navigate the legal complexities of growing and scaling their businesses.

With a JD from Georgetown Law and a Master’s in Communication Management from USC, April blends legal acumen with an understanding of the media landscape. April’s competencies span development, production, and distribution matters, and takes pride in offering bespoke solutions that cater to the unique challenges faced by Latin American entities in the entertainment sector.
      </p>
    </main>
  );
}
