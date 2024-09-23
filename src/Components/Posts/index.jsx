import { PostCard } from "../PostCard";

export const Posts = ({posts}) => {
    console.log(posts)
    return (
        <div className='posts'>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>)
};