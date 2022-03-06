import Image from "next/image";

const Nav = () => (
  <nav className="flex flex-col items-center md:flex-row md:justify-between h-20">
    <div className="logo h-16 w-16 mt-12 mb-6">
      <Image
        src="/favicon.ico"
        alt="logo"
        layout="responsive"
        width={64}
        height={64}
      />
    </div>
    <div className="uppercase text-center">
      <ul className="md:flex justify-around md:space-x-16">
        <li>
          <a href="#">news</a>
        </li>
        <li>
          <a href="#">products</a>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
        <li>
          <a href="#">testimonials</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
