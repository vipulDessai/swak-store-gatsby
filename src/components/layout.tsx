import "./layout.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFilter,
  faSort,
  faSearch,
  faUndo,
  faWindowClose,
  faTimesCircle,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faAngleUp,
  faCircle,
  faHourglassHalf,
  faFrown,
  faMapMarkedAlt,
  faPhoneSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faFilter,
  faSort,
  faSearch,
  faUndo,
  faWindowClose,
  faTimesCircle,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faAngleUp,
  faCircle,
  faHourglassHalf,
  faFrown,
  faMapMarkedAlt,
  faPhoneSquare,
  faEnvelope,
  faFacebook,
  faTwitter,
  faWhatsapp,
);

import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer contact={data.site.siteMetadata.contact} />
    </>
  );
};

export default Layout;
