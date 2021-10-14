import Dialog from "../components/dialog/Dialog";
import { TALLERES_PATH } from "../routing/paths";

export default function NotFound() {
  return (
    <main>
      <Dialog
        message={"Parece que esta página no existe!😰"}
        link={TALLERES_PATH}
      />
    </main>
  );
}
