import React from "react";
export default function FounderCard({
  image,
  name,
  role,
  description,
  university,
  summary,
}) {
  return (
    <article className="team-card">
      <img src={image} width="96" height="112" loading="lazy" alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <p className="team-university">{university}</p>
        <p>{summary}</p>
        <details>
          <summary>Read {name.split(" ")[0]}’s bio</summary>
          <p>{description}</p>
        </details>
      </div>
    </article>
  );
}
