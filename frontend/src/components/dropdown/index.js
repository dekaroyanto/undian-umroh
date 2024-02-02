import Link from "next/link";
import Image from "next/image";
import { listItem } from "./listItemMenu.js";

// import icon
import faScrewdriverWrench from "../../assets/icons/screwdriver-wrench-solid.svg";
import faBullhorn from "../../assets/icons/bullhorn-solid.svg";
import faUserGroup from "../../assets/icons/user-group.svg";
import faUserTie from "../../assets/icons/user-tie-solid.svg";
import faHandshake from "../../assets/icons/handshake-solid.svg";
import faGift from "../../assets/icons/gift-solid.svg";
import faFileLines from "../../assets/icons/file-lines-solid.svg";

export default function DropdownComponent() {
  return (
    <div className="bg-red-700">
      <div className="container py-3 mx-auto">
        <ul className="flex flex-wrap justify-center">
          {/* Dropdown list */}
          {listItem.map((item, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center justify-center h-24 w-full md:w-1/3 lg:w-1/7 mb-3 px-3 py-3 rounded-lg shadow-box bg-primary hover:bg-secondary"
            >
              <div className="mb-1">
                <Image
                  src={
                    (item.icon == "faScrewdriverWrench" &&
                      faScrewdriverWrench) ||
                    (item.icon == "faUserTie" && faUserTie) ||
                    (item.icon == "faFileLines" && faFileLines)
                  }
                  alt="icon"
                />
              </div>
              <p className="text-sm font-medium leading-tight text-white pointer-events-none">
                {item.title}
              </p>
              {/* submenu 1 */}
              <ul
                id="submenu"
                className="shadow-box rounded-md absolute z-[999] min-w-max w-56 py-2 left-0 top-full text-sm bg-white hidden group-hover/submenu1:block"
              >
                {item.submenu?.map((subItem, subIndex) => (
                  <React.Fragment key={subIndex}>
                    <h5 className="px-3 py-1 text-xs font-normal uppercase text-title">
                      {subItem.category}
                    </h5>

                    {subItem.menu?.map((menu, menuIndex) => (
                      <li key={menuIndex} className="relative group/submenu2">
                        <Link
                          href={menu.href}
                          className="block px-3 py-1 hover:text-primary"
                        >
                          {menu.title}
                          {menu.submenu && (
                            <span className="float-right">&#9656;</span>
                          )}
                        </Link>
                        {/* submenu 2 */}
                        {menu.submenu && (
                          <ul
                            id="submenu2"
                            className="shadow-box rounded-md absolute min-w-max py-2 top-0 left-full w-48 text-sm bg-white drop-shadow-2xl hidden group-hover/submenu2:block"
                          >
                            <h5 className="px-3 py-1 text-xs font-normal uppercase text-title">
                              {menu.title}
                            </h5>
                            {menu.submenu?.map((subItem2, subIndex2) => (
                              <li
                                key={subIndex2}
                                className="relative group/submenu3"
                              >
                                <Link
                                  href={subItem2.href}
                                  className="block px-3 py-1 hover:text-primary"
                                >
                                  {subItem2.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                    {subItem.hr && <hr className="my-2" />}
                  </React.Fragment>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
