<script>
  export let id, name, topic;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const gotoPost = () => {
    dispatch("gotoPost", id);
  };
</script>

<style>
  h4:hover {
    cursor: pointer;
  }
  .card {
    border-radius: 5px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 5rem;
    padding: 10px 10px;
  }
  .row {
    margin: 0;
  }
</style>

<div class="container card">
  <div class="row">
    <h4 on:click={gotoPost}>{topic}</h4>
  </div>
  <div class="row">
    <p>{name}</p>
  </div>
</div>
