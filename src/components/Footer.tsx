const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-body">
        <span className="font-display font-semibold text-foreground/60">369 Future Village</span>
        <span>The future is regenerative.</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
