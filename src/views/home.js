import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import Heading from '../components/Heading'
import Herotext from '../components/Herotext'
import '../main.css'
import Infosection from '../components/Infosection'

const Home = () => (
  <Fragment>
    {/* <Hero /> */}

            <Heading />
            <Herotext />
        <Infosection />
  </Fragment>
);

export default Home;
