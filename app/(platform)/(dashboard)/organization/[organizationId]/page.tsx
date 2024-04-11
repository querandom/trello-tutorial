import { db } from "@/lib/db";
import Board from "./_components/board";
import { Form } from "./_components/form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((b) => (
          <Board key={b.id} title={b.title} id={b.id} />
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
