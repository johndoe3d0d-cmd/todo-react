function Footer() {
  const year = new Date().getFullYear();
  return <footer className="copyright">© {year} TodoMatic</footer>;
}

export default Footer;
