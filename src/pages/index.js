import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { usePosts } from "../hooks/use-posts";

export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="p-20">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="mt-4">Hello world!</div>
        <div className="mt-4">
          {usePosts().map(({ id, slug, title, date, formattedDate }) => (
            <div key={id} className="mt-2">
              <time dateTime={date}>{formattedDate}</time>
              <Link to={slug}>
                <h1>{title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
