import { useInView } from "react-intersection-observer";
import { useUsersList } from "../../../hooks/useUsersList";
import { UsersList } from "../../UsersList/UsersList";
import { useEffect } from "react";

export function AdminMain(): JSX.Element {
    const { ref, inView } = useInView();

    const { data, refetch, fetchNextPage, hasNextPage, isLoading, isError } =
        useUsersList();
    console.log(data);

    useEffect(() => {
        if (inView && hasNextPage) {
            void fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    return (
        <div>
            <UsersList usersData={data?.pages} />
            {hasNextPage && (
                <div className="" ref={ref}>
                    Loading...
                </div>
            )}
        </div>
    );
}
