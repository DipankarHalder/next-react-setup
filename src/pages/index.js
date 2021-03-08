import logo from '../assets/logo.webp';
import { Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      Hello All
    </Container>
  );
}
