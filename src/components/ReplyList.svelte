<script>
  export let topic, name, content;
  import { createEventDispatcher } from 'svelte'
  import { pages } from "../store.js";
  import ReplyForm from './ReplyForm.svelte'
  const backToPage = () => {
    $pages = "Posts";
  };
  const dispatch = createEventDispatcher()
  const onReplySuccess = () =>{
    dispatch('ReplySuccess')
  }
</script>

<style>
  .container {
    margin-top: 10rem;
    padding: 0 10rem;
  }
  hr {
    border-top: 0.1rem solid #a2a2a2;
  }
</style>

<div class="container">
  <h1>
    {topic}
    <span style="float:right;">
      <button class="button button-outline" on:click={backToPage}>back</button>
    </span>
  </h1>
  <hr />
  <p>{content}</p>
  <p>Posted by <strong>{name}</strong></p>
  <ReplyForm on:ReplySuccess={onReplySuccess}/>
  <h5><strong>Comment :</strong></h5>
  <slot />
</div>
