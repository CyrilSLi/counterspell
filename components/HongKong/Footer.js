export default function Footer() {
  return (
    <div className="mt-4 p-6 bg-pink text-2xl neuebit">
      <div className="text-center">
        <p>Built with love by teenagers, for teenagers at Hack Club</p>
        <p>Counterspell Hong Kong is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
      </div>
      <div className="flex justify-center items-center ">
        <a
          href="https://hackclub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Hack Club
        </a>{" "}
        |{" "}
        <a
          href="https://www.youtube.com/@HackClubHQ"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          YouTube
        </a>{" "}
        |{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61567287088876"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Facebook
        </a>{" "}
        |{" "}
        <a
          href="https://www.instagram.com/CounterspellHongKong/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Instagram
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://www.instagram.com/aeralixe/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Art by Elena Baskakova (18, Boston)
        </a>
      </div>
    </div>
  );
}
