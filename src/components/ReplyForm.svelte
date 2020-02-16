<script>
  let active = false;
  let reply = "";
  import { user, pages } from "../store.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const handleReplyClick = async () => {
    if (active && reply) {
      let res = await fetch(
        `http://localhost:1234/api/posts/${$pages.replace(
          "PostID?id=",
          ""
        )}/reply`,
        {
          method: "POST",
          body: JSON.stringify({
            name: $user.username,
            reply
          }),
          headers: {
            "content-type": "application/json"
          }
        }
      );
      if (res.ok) {
        dispatch("ReplySuccess");
      }
    } else {
      active = true;
    }
  };
  const handleCancleClick = () => {
    active = false;
    reply = "";
  };
</script>

<style>
  textarea {
    resize: none;
  }
</style>

<button class="button" class:button-clear={!active} on:click={handleReplyClick}>
  Reply !
</button>
{#if active}
  <button
    style="float:right"
    class="button-outline"
    on:click={handleCancleClick}>
    cancle
  </button>
  <textarea bind:value={reply} placeholder="Content" />
{/if}
