import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

function Image({
  objectFit, objectPosition, src, style,
}) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.allImageSharp.edges.find((element) => element.node.fluid.src.split('/').pop() === src);
        if (typeof image === 'undefined' || !image) {
          return null;
        }
        return (
          <Img
            fluid={image.node.fluid}
            objectFit={objectFit}
            objectPosition={objectPosition}
            style={style}
          />
        );
      }}
    />
  );
}

Image.defaultProps = {
  objectFit: 'cover',
  objectPosition: 'center',
  style: {},
};

Image.propTypes = {
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  src: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

export default Image;
