import React from 'react';
import {Link} from 'react-router';
import CenterPage from '../common/CenterPage';
function HomePage () {

    return (
      <CenterPage title="Recent Builds">
        <div className="recent_build">
        <img className="recent_build_img" src={require("../../../images/recentbuild1.jpeg")} alt="Build 1"/>
        <p>
          This build is a high-end gaming computer. It features an Intel i7 processor, an
          NVIDIA GTX 1080 GPU, and 16GB of RAM. The computer was designed to allow the user to play
          video games at the maximum graphics settings, while still maintaing high frame rates and
          allowing for smooth gameplay. The computer boasts a 1TB SSD for large storage capacity and
          quick reading and writing to storage. Although pricy, the computer's strong performance
          is well worth the money.
        </p>
        </div>
        <div className="recent_build">
        <img className="recent_build_img" src={require("../../../images/recentbuild2.jpeg")} alt="Build 2"/>
        <p>
          This build is a basic computer designed for every-day use. Although the parts
          in it are not high-end, they are cost efficient. The computer contains an
          Intel i5 processor, 1TB HDD, and 8GB of RAM. It does not contain a graphics
          card, so it will not be very powerful for playing video games, but it is
          definitely good for every-day use such as browsing the internet and running
          various programs.
        </p>
        </div>
      </CenterPage>
    );
}

export default HomePage;
