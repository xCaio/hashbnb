import React from "react";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <img
            className="h-10"
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo da Hashtag"
          />
          <p>ashbnb</p>
        </div>

        <div>Procura</div>
        <div>Perfil</div>
      </div>
    </div>
  );
};

export default Header;

//React Arrow Function Component Export
