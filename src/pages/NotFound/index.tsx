import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplates';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Pagina nao encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          doloremque delectus voluptatum eum perferendis. Sunt provident non ut
          repellat possimus. Qui porro labore esse laborum eum, nisi quasi sit
          officiis.
        </p>
      </Container>
    </MainTemplate>
  );
}
