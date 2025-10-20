import React from "react";

export default function FooterLink({ name, url, hiring }) {
  return (
    <li className="[&:not(:last-child)]:mb-5 text-gray sm:[&:not(:last-child)]:mb-10">
      <a className="mr-3 text-xl" href={url}>
        {name}
      </a>
      {hiring && (
        <span className="inline-block rounded-3xl bg-secondary px-3 py-1 text-sm font-bold text-primary">
          Hiring!
        </span>
      )}
    </li>
  );
}
