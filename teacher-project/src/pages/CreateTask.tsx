import { TaskCreator } from "../components/TaskCreator/TaskCreator";

export function CreateTask() {
    const onSubmit = (taskData) => {
        console.log(taskData);
    };

    return (
        <div>
            <TaskCreator onSubmit={onSubmit} />
        </div>
    );
}
