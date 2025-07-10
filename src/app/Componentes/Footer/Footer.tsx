"use client";

 
import Link from 'next/link';
import { Eye } from 'lucide-react';
import Image from 'next/image';

const albums = [
  {
    slug: 'wedding-album-design',
    title: 'Wedding Album Design',
    author: 'Telugu Photoshop guruji',
    views: 14900,
    image: '/Images/4.jpg',
  },
  {
    slug: 'album-designing-engagement',
    title: 'Album Designing_Engagement',
    author: 'Harish Raj',
    views: 733,
    image: '/Images/4.jpg',
  },
  {
    slug: 'wedding-album-template',
    title: 'Wedding Album Template',
    author: 'Rahul Telbhare',
    views: 281,
    image: '/Images/5.jpg',
  },
  {
    slug: 'album-designs-dhanu',
    title: 'Album Designs',
    author: 'Dhanu Gunawardhana',
    views: 13500,
    image: '/Images/6.jpg',
  },
];

export default function Biography() {
  return (
    <>
      
      <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto px-4 py-12">
  {/* Heading */}
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
    About Us – SKG Photography
  </h2>

  {/* Flex container for text + image */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-18">
    {/* Text */}
    <div className="md:w-1/2">
      <p className="text-lg text-gray-700 leading-relaxed">
        <span className="font-bold text-gray-900">Mr. Sunder Dipak</span> the man behind the show has been associated with wedding photography for ages and has been a celebrity photographer himself. Under his vision, his sons{" "}
        <span className="font-bold text-gray-900">Mohan</span> &{" "}
        <span className="font-bold text-gray-900">Raman Dipak</span> got the inspiration to build upon his foundation.
        Now, we are one of the reputed names in the wedding photography industry and have added loads of starry names to our client list. We are followed by more than{" "}
        <span className="font-bold text-gray-900">
          8 lac genuine Instagram & Facebook followers
        </span>{" "}
        (across different pages) who adore and love our work.
      </p>
      <Link
              href="/book"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition mt-12"
            >
              Book Now
            </Link>
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <Image
      height={0}
      width={0}
        src="/Images/sdk.jpeg"
        alt="SKG Photography"
        className="w-full h-[26rem] rounded-lg shadow-lg object-cover"
      />
    </div>
  </div>
</div>

    </section>

 <h2 className='flex ml-14 text-4xl font-bold'>Trending Albums</h2>
    <section className="bg-white py-16 px-4">
      
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album) => {
            const albumPath = `/${album.slug}`;
            const whatsappMessage = `https://wa.me/919990144668?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(album.title)}%20album`;

            return (
              <div
                key={albumPath}
                className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {album.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{album.author}</p>

                  <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{(album.views / 1000).toFixed(1)}K</span>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    <Link
                      href={albumPath}
                      className="text-sm bg-black text-white py-1.5 px-3 rounded hover:bg-gray-800 transition"
                    >
                      View Album
                    </Link>
                    <a
                      href={whatsappMessage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-black text-black py-1.5 px-3 rounded hover:bg-gray-100 transition"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      

      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
