import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";


// typeScript for only props type checking...
type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};


const ActionButton = ({ children, setSelectedPage }: Props) => (
    <AnchorLink
        href={`#${SelectedPage.ContactUs}`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 duration-300 hover:text-white"
    >
        {children}
    </AnchorLink>
);

export default ActionButton;