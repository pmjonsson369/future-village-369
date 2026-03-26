const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          <span className="text-gradient font-display font-semibold">369</span> Future Village © {new Date().getFullYear()}
        </p>
        <p className="text-xs">The future of living is regenerative.</p>
      </div>
    </footer>
  );
};

export default Footer;
