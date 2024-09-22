function handleUpdate(updatedService) {
    console.log("Service to update:", updatedService);
    updateService(updatedService);
    editingService = null; // Reset after update
  }
  