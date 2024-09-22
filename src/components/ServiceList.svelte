<script>
	export let services;
	export let onDelete;
	export let onEdit;
</script>

<ul>
	{#each services as service, index}
		<li class="flex justify-between items-center p-4 border-b">
			<div>
				<h4 class="font-semibold">{service.name}</h4>
				<p>{service.description} - $ {service.price}</p>
			</div>
			<div>
				<button on:click={() => onEdit(index)} class="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
				<button on:click={() => onDelete(index)} class="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
			</div>
		</li>
	{/each}
</ul>
