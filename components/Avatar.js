import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src={'/tar.png'} 
        width={537} 
        height={498} 
        alt=""
        className="translate-z-0 w-full h-full"
        />
    </div>
  )
};

export default Avatar;
