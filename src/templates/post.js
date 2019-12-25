import React from "react";
import { graphql } from "gatsby";

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, formattedDate },
      html
    }
  }
}) => {
  return (
    <div>
      <time dateTime={date}>{formattedDate}</time>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        formattedDate: date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`;
