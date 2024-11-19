import Link from "next/link";
import { CalendarIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/dotted-separator";

import { useWorkspaceId } from "@/features/workspaces/hooks/useWorkspaceId";

import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { Task } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface TaskListProps {
  data: Task[];
  total: number;
}

export const TaskList = ({ data, total }: TaskListProps) => {
  const workspaceId = useWorkspaceId();

  const { open: createTask } = useCreateTaskModal();

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Tasks ({total})</p>
          <Button variant="muted" size="icon" onClick={() => createTask()}>
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        <ul className="flex flex-col gap-y-4">
          {data.map((task) => {
            return (
              <li key={task.$id}>
                <Link href={`/workspaces/${workspaceId}/tasks/${task.$id}`}>
                  <Card className=" shadow-none rounded-lg hover:opacity-75 transition">
                    <CardContent className="p-4">
                      <p className="text-lg font-medium truncate">
                        {task.name}
                      </p>
                      <div className="flex items-center gap-x-2">
                        <p>{task.project?.name}</p>
                        <div className="size-1 rounded-full bg-neutral-300" />
                        <div className="text-sm text-muted-foreground flex items-center">
                          <CalendarIcon className="size-3 mr-1" />
                          <span className="truncate">
                            {formatDistanceToNow(new Date(task.dueDate))}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            );
          })}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
            No tasks found
          </li>
        </ul>
        <Button variant="muted" className="mt-4 w-full" asChild>
          <Link href={`/workspaces/${workspaceId}/tasks`}>Show All</Link>
        </Button>
      </div>
    </div>
  );
};