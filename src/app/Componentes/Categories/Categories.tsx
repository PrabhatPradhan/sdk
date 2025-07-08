'use client';
import Image from 'next/image';
import Link from 'next/link';

const albums = [
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: '/Images/Categories-1.jpg',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: '/Images/Categories-2.jpg',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: '/Images/Categories-3.jpg',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: '/Images/Categories-4.jpg',
  },
];

interface SectionHeadingProps {
  title: string;
  className?: string; // optional for custom styles
}
export default function AlbumCategories({ title, className }: SectionHeadingProps) {
  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-12">
          <h5 className="text-2xl font-semibold tracking-widest text-gray-500 uppercase mb-1">
            Albums Categories
          </h5>
          <h2 className={`text-3xl font-bold text-gray-800 ${className || ''}`}>
      {title}
    </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {albums.map((album, index) => (
            <div key={index} className="bg-gray-100 rounded shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Image
                src={album.image}
                alt={album.title}
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <div className="p-4 text-center">
                <h3 className="text-md font-bold text-gray-800">{album.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{album.subtitle}</p>
                <Link
                  href="/book"
                  className="inline-block bg-black text-white px-6 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
