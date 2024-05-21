import { CategoryForm } from "../components/CategoryForm/CategoryForm";
import { useCreateOne } from "../hooks/useCreateOne";
import { ICategory } from "../types/Category.interface";

export function CreateCategory() {
    const CreateCategory = useCreateOne<ICategory>("category", "category");

    const handleCreateCategory = (data: ICategory) => {
        CreateCategory.mutate({
            data,
            route: "category",
        });
    };

    return (
        <div>
            <CategoryForm handleCreateCategory={handleCreateCategory} />
        </div>
    );
}
