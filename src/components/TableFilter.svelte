<script>
  export let stateName = "";
  export let sortBy = "name";
</script>

<style>
  input,
  .select,
  select {
    width: 100%;
  }
  .column {
    padding-left: 0;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <input
          type="text"
          class="input"
          bind:value={stateName}
          placeholder="Filter States" />

      </div>
      <div class="column is-6">
        <div class="select">
          <select bind:value={sortBy}>
            <option value="name">By State Name</option>
            <option value="cases">Cases</option>
            <option value="deaths">Death</option>
            <option value="tested">Tested</option>
          </select>
        </div>
      </div>

    </div>

  </div>

</div>
