import { Link } from "react-router-dom";


const Card = ({ imgsrc, title, description, flip }) => {
  return (
    <div className="relative bg-black rounded-[.25rem]">
      {/* Background image */}
      <img
        src={imgsrc}
        alt=""
        className={`w-full h-full object-contain ${flip}`}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-[.25rem] w-full"></div>
      {/* text context */}
      <div className="absolute inset-0 text-[#f4f4f4] flex flex-col justify-end p-8 gap-y-1  rounded-[.25rem]">
        <h1 className="text-[1.5rem] font-semibold">{title}</h1>
        <span className="text-[.875rem] font-normal text-wrap">
          {description}
        </span>
        {/* path will be included later */}
        <Link className="font-semibold inline-block">
          <span className="border-b text-[1rem]">Shop Now</span>
        </Link>
      </div>
    </div>
  );
}

export default Card