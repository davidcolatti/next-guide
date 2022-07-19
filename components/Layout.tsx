import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <li>Home</li>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
