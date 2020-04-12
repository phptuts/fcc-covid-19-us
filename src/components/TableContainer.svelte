<script>
  import TableFilter from "./TableFilter.svelte";
  import Table from "./Table.svelte";

  export let data;

  $: states = data;
</script>

<TableFilter />
<Table {states} />
