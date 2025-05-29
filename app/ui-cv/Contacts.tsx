import Link from "next/link";
import cv from "../cvconfig";

export const Contacts = () => {
  return (
    <div>
      <p>
        Website:{" "}
        <Link href={cv.personal.website}>
          {new URL(cv.personal.website).hostname}
        </Link>
      </p>
      <p>
        Email: <Link href={cv.personal.email}>{cv.personal.email}</Link>
      </p>
      <p>
        Telegram:{" "}
        <Link href={`https://t.me/${cv.personal.telegram}`}>
          @{cv.personal.telegram}
        </Link>
      </p>
      <p>
        GitHub:{" "}
        <Link href={`https://github.com/${cv.personal.github}`}>
          {cv.personal.github}
        </Link>
      </p>
      <p>
        Linkedin:{" "}
        <Link href={`https://www.linkedin.com/in/${cv.personal.linkedin}`}>
          in/{cv.personal.linkedin}
        </Link>
      </p>
    </div>
  );
};
