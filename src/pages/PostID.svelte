<script>
  import { pages } from "../store.js";
  import { fade } from "svelte/transition";
  import ReplyList from "../components/ReplyList.svelte";
  import ReplyListItem from "../components/ReplyListItem.svelte";
  let topic;
  const fetchPostbyid = async () => {
    let id = $pages.replace("PostID?id=", "");
    let res = await fetch(`http://localhost:1234/api/posts/${id}`);
    let data = await res.json();
    if (res.ok) {
      topic = data.topic;
      return data;
    } else {
      let err = await res.text();
      throw new Error(err);
    }
  };
  let onReply = () => {
    promise = fetchPostbyid();
  };
  let promise = fetchPostbyid();
</script>

<style>

</style>

<svelte:head>
  {#if topic}
    <title>Post: {topic}</title>
  {/if}
</svelte:head>

<section>
  {#await promise}
    <p>Fetching posts . . .</p>
  {:then post}
    {#if post}
      <ReplyList
        topic={post.topic}
        name={post.username}
        content={post.content}
        on:ReplySuccess={onReply}>
        {#if post.comment}
          {#each post.comment as comment}
            <ReplyListItem name={comment.username} reply={comment.reply} />
          {/each}
        {/if}
      </ReplyList>
    {/if}
  {:catch}
    <div>Erro</div>
  {/await}
</section>
