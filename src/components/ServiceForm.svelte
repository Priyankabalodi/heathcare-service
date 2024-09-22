<script>
    import { createEventDispatcher } from 'svelte';
    export let editingService = null;
  
    let name = '';
    let id = 0; // Will be used only for new services
  
    const dispatch = createEventDispatcher();
  
    // Set values when editing
    $: if (editingService) {
      name = editingService.name;
      id = editingService.id;
    } else {
      name = '';
      id = Date.now(); // Unique ID for new service
    }
  
    function submit() {
      if (name.trim()) {
        if (editingService) {
          dispatch('update', { id, name });
        } else {
          dispatch('add', { id, name });
        }
        clearForm();
      }
    }
  
    function clearForm() {
      name = '';
      id = Date.now();
    }
  </script>
  
  <form on:submit|preventDefault={submit}>
    <input type="text" bind:value={name} placeholder="Service Name" required />
    <button type="submit">{editingService ? 'Update' : 'Add'} Service</button>
    {#if editingService}
      <button type="button" on:click={() => dispatch('cancel')}>Cancel</button>
    {/if}
  </form>
  
  <style>
    form {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
    }
  
    input {
      flex: 1;
      margin-right: 0.5em;
    }
  
    button {
      padding: 0.5em;
    }
  </style>
  