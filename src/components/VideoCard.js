import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const { id, snippet, statistics } = video;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  // const publishedDate = new Date(publishedAt);
  const { url } = thumbnails.default;
  const { viewCount } = statistics;
  const imageURL = url.replace(
    "default.jpg",
    "hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPeNx9hiSD07HEhVM4SqAxgSB2nQ"
  );
  return (
    <Link to={"watch/" + id}>
      <div className="rounded-t-3xl cursor-pointer">
        <div>
          <img className="rounded-3xl" src={imageURL} alt={title} />
        </div>
        <div className="p-3 mb-3 min-h-36">
          <div className="line-clamp-2 mb-2 font-bold">{title}</div>
          <div className="text-sm text-gray-500">{channelTitle}</div>
          <div className="text-sm text-nowrap text-gray-400">
            {parseInt(viewCount).toLocaleString()} views . {publishedAt}
          </div>
        </div>
      </div>
    </Link>
  );
}
