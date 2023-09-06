import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET ME KNOW MORE
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              ABOUT YOU
            </h1>
            <Button type="primary" onClick={() => { window.open("mailto:yugao2077@gmail.com") }}>Let's Talk</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Copyright ©2023{" "}
        <Link href="https://www.linkedin.com/in/yugao2077/">
          <a className="underline underline-offset-1">Yu Gao</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
