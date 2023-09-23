import { PostQuery } from "../App";
import useData from "./useData";


export interface Post {
	userId: number;
	id: number;
	body: string;
	title: string;
}

const usePosts = (postQuery: PostQuery) => useData<Post>("/posts", {
    params:{
        userId: postQuery.userId
    }
}, [postQuery])

export default usePosts