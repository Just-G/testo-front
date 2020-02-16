<script>
  import { pages } from "./store.js";
  import { fly, fade } from "svelte/transition";
  import Layout from "./Layout.svelte";
  import Login from "./pages/Login.svelte";
  import PostID from "./pages/PostID.svelte";
  import Posts from "./pages/Posts.svelte";
  import Register from "./pages/Register.svelte";
  let dir = "";
  const onNavigate = ({detail:direction}) => {
    dir = direction;
  };
</script>

<Layout>
  {#if $pages === 'Login'}
    <div
      style="height:100%"
      in:fly={{ x: 200, duration: 300 }}
      out:fly={{ x: -200, duration: 300 }}>
      <Login />
    </div>
  {:else if $pages === 'Posts'}
    <div
      style="height:100%"
      in:fly={{ x: 200, duration: 300 }}
       out:fly={{ x: dir === 'right' ? 200 : -200, duration: 300 }}>
      <Posts on:navigate={onNavigate} />
    </div>
  {:else if $pages === 'Reg'}
    <div
      style="height:100%"
      in:fly={{ x: 200, duration: 300 }}
      out:fly={{ x: dir === 'right' ? 200 : -200, duration: 300 }}>
      <Register on:navigate={onNavigate} />
    </div>
  {:else if $pages.includes('PostID')}
    <div
      style="height:100%"
      in:fly={{ x: 200, duration: 300 }}
      out:fly={{ x: 200, duration: 300 }}>
      <PostID />
    </div>
  {/if}
</Layout>
