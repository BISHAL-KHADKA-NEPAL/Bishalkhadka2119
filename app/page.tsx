import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/np.jpg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
          About Website ?
          </h1>
          <p className="mt-2 text-lg">
          This website currently only offers signup functionality. I will update the website in a few days. You can create your account by clicking on 'Sign in'
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
               Sign in
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="bishal khadka" />
        </div>
      </article>
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">Why I'm Here</h2>
        <p className="mt-2">
        The primary purpose of this site is to refine my skills and experiment with new ideas. I'm using it as a platform to test, learn, and iterate{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100086984447908"
            className="font-medium text-primary-600 hover:underline"
          >
            Contact me
          </a>
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">My Academic Path</h3>
            <p className="text-gray-700">
            My current focus is on my BBA program at MMC Dharan, where I'm diving deep into the world of business and administration.
            </p>
            <div className="grow"></div>
            <a
              href="https://www.facebook.com/profile.php?id=100086984447908"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Contact me <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Let's Connect</h3>
            <p className="text-gray-700">
            I'm a firm believer in the internet's power to forge connections. Feel free to reach out for discussions, collaborations, or just to say hello!
            </p>
            <div className="grow"></div>
            <a
              href="https://www.facebook.com/profile.php?id=100086984447908"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Say hello! <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Welcome to My Digital Sanctuary</h3>
            <p className="text-gray-700">
            Greetings, and thank you for stepping into my digital realm. I'm Bishal, and I'm delighted to have you here.
            </p>
            <div className="grow"></div>
            <a
              href="https://www.facebook.com/profile.php?id=100086984447908"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Message me <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
