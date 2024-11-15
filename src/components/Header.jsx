import ExternalLink from "./ExternalLink.jsx";
import Colab from "../icons/Colab.jsx";
import Github from "../icons/Github.jsx";
import Menu from "../icons/Menu.jsx";

const Header = ({ setMobileMenuShown }) => {
  return (
    <header className="border-b py-5 sticky top-0 bg-white z-50">
      <div className="max-w-[1200px] mx-auto px-3">
        <div className="flex justify-between place-content-center">
          <div className="flex items-center place-content-center">
            <div
              className="md:hidden mr-2 hover:bg-gray-200 rounded p-1 cursor-pointer"
              onClick={() => setMobileMenuShown((shown) => !shown)}
            >
              <Menu className="w-6 h-6" />
            </div>
            <div className="text-xl">
              <span className="font-semibold pr-1">
                Brighter Shores: Bounty Planner
              </span>
            </div>
          </div>

          <div className="flex items-center place-content-center gap-2">
            <div className="hidden md:block">
              <ExternalLink to="https://colab.research.google.com/drive/1lQo5bGOOHYLgjLWzObR3c6CZlwlc5iNp">
                <div className="p-1 hover:bg-gray-200 cursor-pointer flex justify-center place-content-center rounded">
                  <Colab className="w-6 h-6" />
                </div>
              </ExternalLink>
            </div>
            <ExternalLink to="https://github.com/bricefrisco/c964-wgu-compsci-capstone">
              <div className="p-1 hover:bg-gray-200 cursor-pointer flex justify-center place-content-center rounded">
                <Github className="w-6 h-6 mt-0" />
              </div>
            </ExternalLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
