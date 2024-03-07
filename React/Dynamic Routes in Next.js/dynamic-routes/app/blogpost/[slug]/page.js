export default function Page({ params }) {
    // throw new Error("You must implement the error in program")
    // fetch your blog post by its slug
    let lang = ["python", "javascript", "java", "cpp", "react"]

    if (lang.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    } else {
        return <div>Post not found {params.slug}</div>
    }
    
}