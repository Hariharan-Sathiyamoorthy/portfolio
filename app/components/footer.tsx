"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { HiDownload } from 'react-icons/hi';
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon,download }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" download={download}>
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">

      <SocialLink href={socialLinks.github} icon={FaGithub} download={false} />

      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} download={false}/>
      <SocialLink href={socialLinks.email} icon={TbMailFilled} download={false}/>
      <SocialLink 
  href="/resume.pdf" 
  icon={HiDownload}
  download
  aria-label="Download Resume"
/>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
