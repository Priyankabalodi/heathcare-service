<script>
	import ServiceList from './components/ServiceList.svelte';
	import NewServiceForm from './components/NewServiceForm.svelte';

	let services = [
		{ name: 'Consultation', description: 'Doctor consultation', price: 50 },
		{ name: 'Vaccination', description: 'Flu vaccine', price: 20 },
	];

	let editingService = null;

	function addService(newService) {
		services = [...services, newService];
	}

	function deleteService(index) {
		services = services.filter((_, i) => i !== index);
	}

	function editService(index) {
		editingService = { ...services[index], index }; 
	}

	function updateService(updatedService) {
		services[editingService.index] = updatedService;
		editingService = null; 
	}
</script>

<nav class="bg-green-400 p-4 flex items-center justify-between">
	<div class="flex items-center">
		<img src="./assests/logo.png" alt="Logo" class="h-10 w-10 mr-5 rounded-full" />
		<h1 class="text-white text-xl md:text-2xl text-center flex-grow font-bold">Healthcare App</h1>
	</div>
</nav>

<header class="p-6 bg-green-100 text-center">
	<h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Welcome to Healthcare Services</h2>
	<p class="text-gray-600 mt-2 text-sm md:text-base">Your one-stop solution for all medical needs.</p>
</header>

<div class="container bg-green-100 mx-auto p-4">
	<div class="card bg-white shadow-md rounded-lg p-4 md:p-6 mb-6">
		<h3 class="text-lg md:text-xl font-semibold mb-4">{editingService ? 'Edit Service' : 'Add New Service'}</h3>
		<NewServiceForm 
			onAdd={editingService ? updateService : addService} 
			initialService={editingService} 
		/>
	</div>

	<div class="card bg-white shadow-md rounded-lg p-4 md:p-6 mb-6">
		<h3 class="text-lg md:text-xl font-semibold mb-4">Available Services</h3>
		<ServiceList {services} onDelete={deleteService} onEdit={editService} />
	</div>
</div>

