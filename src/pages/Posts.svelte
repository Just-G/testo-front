<script>
  //   import { onMount } from "svelte";
  import { user, pages } from "../store.js";
  import { fade } from "svelte/transition";
  import PostList from "../components/PostList.svelte";
  import PostListItem from "../components/PostListItem.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const onNavigate = ({detail:dir}) => {
    dispatch("navigate", dir);
  };
  let fetchdata = async () => {
    if ($user) {
      let res = await fetch("http://localhost:1234/api/posts");
      let data = await res.json();
      if (res.ok) {
        return data;
      } else {
        let err = await res.text();
        throw new Error(err);
      }
    }
  };
  let promise = fetchdata();
  const gotoPost = ({ detail: id }) => {
    $pages = `PostID?id=${id}`;
    console.log(id, $pages);
    dispatch("navigate", "left");
  };
</script>

<style>
  .error {
    color: red;
  }
</style>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<section>
  {#await promise}
    <p>Fetching posts . . .</p>
    }
  {:then posts}
    <PostList on:navigate={onNavigate}>
      {#each posts as post}
        <PostListItem
          id={post.id}
          name={post.username}
          topic={post.topic}
          on:gotoPost={gotoPost} />
      {/each}
    </PostList>
  {:catch err}
    <p class="error">Error when fetch posts.{err}</p>
  {/await}
</section>
