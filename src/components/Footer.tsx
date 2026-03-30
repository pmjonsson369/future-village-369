const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-muted-foreground">
        <span>369 Future Village © {new Date().getFullYear()}</span>
        <span>The future is regenerative.</span>
      </div>
    </footer>
  );
};

export default Footer;
