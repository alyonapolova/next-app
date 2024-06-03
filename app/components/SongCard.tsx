interface ISongCardProps {
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  year: number;
  link: string;
  image: string;
}

export const SongCard = ({
  title,
  artist,
  year,
  link,
  image,
}: ISongCardProps) => {
  console.log(title);
  return (
    <a href={link} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{artist}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">{year}</p>
    </a>
  );
};
