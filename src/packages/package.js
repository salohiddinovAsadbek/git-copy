import Footer from "../components/footer";
import Img from "../components/img";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "../styles/packages.css";
import Docker from "../images/2993785_docker_social media_icon.svg";
import Apache from "../images/4691299_apache_icon.svg";
import Nuget from "../images/4691586_nuget_icon.svg";
import Ruby from "../images/4691486_rubygems_icon.svg";
import Npm from "../images/9057015_npm_icon.svg";
import Ship from "../images/worldwide-shipping.png";

function Package() {
  return (
    <div>
      <Navbar />
      <div className="package">
        <Profile />
        <div className="packageWrapper">
          <Img src="packages" />
          <h1>Get started with GitHub Packages</h1>
          <p>
            Safely publish packages, store your packages alongside your code,
            and share your packages privately with your team.
          </p>
          <span>Choose a registry</span>
          <div className="packageCards">
            <div className="packageCard">
              <div>
                <img src={Docker} alt="imageas" />
                <h1>Docket</h1>
              </div>
              <p>
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <button>Learn more</button>
            </div>
            <div className="packageCard">
              <div>
                <img src={Apache} alt="imageas" />
                <h1>Apache Maven</h1>
              </div>
              <p>
                A default package manager used for the Java programming language
                and the Java runtime environment.
              </p>
              <button>Learn more</button>
            </div>
            <div className="packageCard">
              <div>
                <img src={Nuget} alt="imageas" />
                <h1>NuGet</h1>
              </div>
              <p>
                A free and open source package manager used for the Microsoft
                development platforms including .NET.
              </p>
              <button>Learn more</button>
            </div>
            <div className="packageCard">
              <div>
                <img src={Ruby} alt="imageas" />
                <h1>RubyGems</h1>
              </div>
              <p>
                A standard format for distributing Ruby programs and libraries
                used for the Ruby programming language.
              </p>
              <button>Learn more</button>
            </div>
            <div className="packageCard">
              <div>
                <img src={Npm} alt="imageas" />
                <h1>npm</h1>
              </div>
              <p>
                A package manager for JavaScript, included with Node.js. npm
                makes it easy for developers to share and reuse code.
              </p>
              <button>Learn more</button>
            </div>
            <div className="packageCard">
              <div>
                <img src={Ship} alt="imageas" />
                <h1>Containers</h1>
              </div>
              <p>
                A single place for your team to manage Docker images and decide
                who can see and access your images.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Package;
