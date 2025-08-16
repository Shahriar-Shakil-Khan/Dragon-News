import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

export default function NewsCard({ news }) {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  // Format date
  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Function to render stars
  const renderStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${
            i <= Math.round(ratingValue) ? "text-orange-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card w-full bg-base-100 rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Author + Icons */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        {/* Bookmark & Share */}
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer transition duration-200 hover:text-primary hover:scale-110" />
          <FaShareAlt className="cursor-pointer transition duration-200 hover:text-primary hover:scale-110" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="mt-2 overflow-hidden">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover transition duration-300 hover:scale-105"
        />
      </figure>

      {/* Details - always cut with fake Read More */}
      <div className="p-4 text-gray-600 text-sm">
        <p>
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="ml-1 text-primary font-medium hover:underline cursor-default">
            Read More
          </Link>
        </p>
      </div>

      {/* Tags */}
      <div className="px-4 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="badge badge-outline hover:bg-primary hover:text-white transition duration-200"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-3">
        <div className="flex items-center gap-1">
          {renderStars(rating.number)}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye className="transition duration-200 hover:scale-110" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
