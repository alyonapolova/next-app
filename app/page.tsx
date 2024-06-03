import Image from 'next/image';
import { SongCard } from './components/SongCard';
import { songs } from '@/data';

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {songs.map((song, index) => (
              <SongCard key={index} {...song} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
