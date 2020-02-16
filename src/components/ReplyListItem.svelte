<script>
  export let name, reply;
</script>

<style>
  .card {
    border-radius: 5px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 2rem;
    padding: 10px 10px;
  }
  .card:first{
    margin-top: 10px;
  }
  p{
    margin-bottom: 1rem;
  }
</style>

<div class="card">
  <p>{reply}</p>
  <p>
    From:
    <strong>{name}</strong>
  </p>
</div>
