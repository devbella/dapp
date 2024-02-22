import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between font-bold text-lg px-2 py-4">
      <div>
        <Link to="/"> 🌳 The Tree</Link>
      </div>
      <div>
        <Link to="/nft">NFT</Link>
        <Link className="ml-4" to="/governance">
          Governance
        </Link>
        <Link className="ml-4" to="/">
          Docs
        </Link>
      </div>
    </header>
  );
};

export default Header;
