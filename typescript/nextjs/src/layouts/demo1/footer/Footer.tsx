import { Container } from '@/components/container';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 py-5">
          <div className="flex gap-2 font-normal text-2sm">
            <span className="text-gray-500">2024 &copy;</span>
            <a href="#" className="text-gray-600 hover:text-primary">
              Keenthemes
            </a>
          </div>
          <nav className="flex gap-2 font-normal text-2sm text-gray-600">
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Help
            </a>
            <a href="#" className="hover:text-primary">
              Purchose
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
