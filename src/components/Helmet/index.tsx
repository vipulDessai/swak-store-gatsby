import { useEffect } from "react";

enum HelmetMetaKeys {
  name = "name",
  property = "property",
  content = "content",
}

interface HelmetProps {
  title: string;
  titleTemplate?: string;
  meta: {
    [key in HelmetMetaKeys]?: string;
  }[];
  description?: string;
  keywords?: string[];
  htmlAttributes?: {
    lang?: string;
  };
}

function Helmet({
  title,
  titleTemplate,
  description,
  keywords,
  htmlAttributes,
}: HelmetProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.content = description;
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.content = keywords;
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    return () => {
      // Optional cleanup
    };
  }, [title, description, keywords]);

  return null; // This component doesn't render anything in the DOM
}

export default Helmet;
