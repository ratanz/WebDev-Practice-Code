import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-800 rounded-lg size-[480px] p-2 mx-auto">
      <h1 className="mb-4 font-sans" >Home Page</h1>
      <h2 className="text-blue-400">Welcome to Facebook!</h2>
      <hr className=" mt-4" />
      <h3 className="text-xs mt-12 p-2 text-zinc-300">This is Peter -</h3>
      <Image className="mx-auto border-2 rounded-sm" width={460} height={400} src="https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/05/19153318/Family-Guy-1-1600x900.jpg" alt="" />
    </div>
  );
}
