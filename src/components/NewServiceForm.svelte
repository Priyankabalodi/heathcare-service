<script>
	export let onAdd;
	export let initialService = null;

	let name = '';
	let description = '';
	let price = '';

	if (initialService) {
		name = initialService.name;
		description = initialService.description;
		price = initialService.price;
	}

	function handleSubmit() {
		const newService = { name, description, price: parseFloat(price) };
		onAdd(newService);
		clearForm();
	}

	function clearForm() {
		name = '';
		description = '';
		price = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={name} placeholder="Service Name" required />
	<input bind:value={description} placeholder="Description" required />
	<input bind:value={price} placeholder="Price" type="number" required />
	<button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">
		{initialService ? 'Update Service' : 'Add Service'}
	</button>
</form>
