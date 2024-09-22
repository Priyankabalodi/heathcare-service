<script>
  export let service;
  export let onUpdate;

  let name = service.name;
  let description = service.description;
  let price = service.price;

  function handleSubmit() {
    if (name && description && price) {
      onUpdate({ name, description, price: parseFloat(price) });
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={name} placeholder="Service Name" required>
  <textarea bind:value={description} placeholder="Service Description" required></textarea>
  <input type="number" bind:value={price} placeholder="Price" required>
  <button type="submit">Update Service</button>
</form>
