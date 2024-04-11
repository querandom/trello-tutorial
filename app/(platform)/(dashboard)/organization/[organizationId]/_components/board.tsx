import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDelete } from "../form-delete";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board name:{title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
