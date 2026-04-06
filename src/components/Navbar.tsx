import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Smart Garden", href: "/smart-garden" },
  { label: "Smart Villa", href: "/smart-villa" },
  { label: "Eco-Villages", href: "/eco-villages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ l, onClick }: { l: typeof links[0]; onClick?: () => void }) => {
  const cls = "text-xs text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide font-body";
  const mobileCls = "text-sm text-muted-foreground hover:text-primary transition-colors font-body";
  const isInternal = l.href.startsWith("/");

  if (isInternal) {
    return (
      <Link to={l.href} className={onClick ? mobileCls : cls} onClick={onClick}>
        {l.label}
      </Link>
    );
  }
  return (
    <a href={l.href} className={onClick ? mobileCls : cls} onClick={onClick}>
      {l.label}
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="text-sm font-bold tracking-wide text-foreground font-display">
          369 Future Village
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.href} l={l} />
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-t border-border/50"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <NavLink key={l.href} l={l} onClick={() => setOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
