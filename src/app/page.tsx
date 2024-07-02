import createPost from "@/server/actions/create-posts";
import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const { error, success } = await getPosts();

  if (error) {
    throw new Error(error)
  }

  if (success) {
    return (
      <main>
        {success.map((post, id) => {
          return <div key={id}>
            <h2>{post.title}</h2>
          </div>
        })}

        <form action={createPost}>
          <input type="text" name="title" placeholder="this is test" className="text-black"></input>
          <button>Submit</button>
        </form>
      </main>
    );
  }
}
