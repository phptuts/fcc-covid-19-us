<script>
  import TableFilter from "./TableFilter.svelte";
  import Table from "./Table.svelte";

  export let data;
  let sortBy = "name";
  let stateName = "";
  $: states = filterAndSort(data, stateName, sortBy);

  function filterAndSort(states, stateName, sortBy) {
    const filteredStates = states.filter(state => {
      return (
        stateName === "" ||
        state.fullStateName.toLowerCase().indexOf(stateName.toLowerCase()) > -1
      );
    });

    if (sortBy !== "name") {
      return filteredStates.sort((a, b) => {
        return +b[sortBy].replace(",", "") - +a[sortBy].replace(",", "");
      });
    }

    return filteredStates;
  }
</script>

<TableFilter bind:stateName bind:sortBy />
<Table {states} />
